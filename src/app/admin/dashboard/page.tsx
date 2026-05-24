"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Image as ImageIcon,
  Settings,
  LogOut,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Menu,
  X,
  Upload,
  Plus,
  FileText,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Booking {
  id: number;
  name: string;
  phone: string;
  address: string;
  service_type: string;
  message: string;
  status: string;
  created_at: string;
}

interface GalleryImage {
  id: number;
  title: string;
  image_path: string;
  category: string;
  created_at: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("bookings");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchData(token);
  }, []);

  const fetchData = async (token: string) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };

      const [bookingsRes, galleryRes, servicesRes] = await Promise.all([
        fetch("/api/bookings", { headers }),
        fetch("/api/gallery", { headers }),
        fetch("/api/services", { headers }),
      ]);

      if (bookingsRes.ok) setBookings(await bookingsRes.json());
      if (galleryRes.ok) setGallery(await galleryRes.json());
      if (servicesRes.ok) setServices(await servicesRes.json());
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const handleDeleteBooking = async (id: number) => {
    if (!confirm("هل أنت متأكد من حذف هذا الطلب؟")) return;

    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setBookings(bookings.filter((b) => b.id !== id));
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    const token = localStorage.getItem("adminToken");
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setBookings(
          bookings.map((b) => (b.id === id ? { ...b, status } : b))
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm);
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      new: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      contacted: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
      completed: "bg-green-500/10 text-green-400 border-green-500/30",
      cancelled: "bg-red-500/10 text-red-400 border-red-500/30",
    };
    const labels = {
      new: "جديد",
      contacted: "تم التواصل",
      completed: "مكتمل",
      cancelled: "ملغي",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const tabs = [
    { id: "bookings", label: "طلبات العملاء", icon: Users },
    { id: "gallery", label: "معرض الصور", icon: ImageIcon },
    { id: "services", label: "الخدمات", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 right-0 z-50 w-64 bg-navy-900 text-white transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg">لوحة التحكم</h2>
              <p className="text-xs text-white/50">شركة الوسيط</p>
            </div>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-gold-400/20 text-gold-400"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-navy-600"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-navy-900">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h1>
          <div className="w-8" />
        </header>

        {/* Content */}
        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-4 border-gold-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {/* Bookings Tab */}
              {activeTab === "bookings" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "إجمالي الطلبات", value: bookings.length, color: "bg-blue-500" },
                      { label: "جديدة", value: bookings.filter((b) => b.status === "new").length, color: "bg-yellow-500" },
                      { label: "مكتملة", value: bookings.filter((b) => b.status === "completed").length, color: "bg-green-500" },
                      { label: "ملغاة", value: bookings.filter((b) => b.status === "cancelled").length, color: "bg-red-500" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                        <div className={`w-3 h-3 ${stat.color} rounded-full mb-2`} />
                        <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                        <div className="text-sm text-navy-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Filters */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                      <input
                        type="text"
                        placeholder="البحث بالاسم أو الهاتف..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pr-10 pl-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-400"
                    >
                      <option value="all">جميع الحالات</option>
                      <option value="new">جديد</option>
                      <option value="contacted">تم التواصل</option>
                      <option value="completed">مكتمل</option>
                      <option value="cancelled">ملغي</option>
                    </select>
                  </div>

                  {/* Bookings Table */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-100">
                          <tr>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">#</th>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">الاسم</th>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">الهاتف</th>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">العنوان</th>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">الخدمة</th>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">الحالة</th>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">التاريخ</th>
                            <th className="px-4 py-3 text-right text-sm font-bold text-navy-600">إجراءات</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredBookings.map((booking) => (
                            <tr key={booking.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                              <td className="px-4 py-3 text-sm text-navy-600">{booking.id}</td>
                              <td className="px-4 py-3 text-sm font-medium text-navy-900">{booking.name}</td>
                              <td className="px-4 py-3 text-sm text-navy-600">{booking.phone}</td>
                              <td className="px-4 py-3 text-sm text-navy-600">{booking.address}</td>
                              <td className="px-4 py-3 text-sm text-navy-600">{booking.service_type || "-"}</td>
                              <td className="px-4 py-3">{getStatusBadge(booking.status)}</td>
                              <td className="px-4 py-3 text-sm text-navy-500">{formatDate(booking.created_at)}</td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleUpdateStatus(booking.id, "completed")}
                                    className="p-1.5 text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                                    title="تحديث لمكتمل"
                                  >
                                    <CheckCircle className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleUpdateStatus(booking.id, "cancelled")}
                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    title="تحديث لملغي"
                                  >
                                    <XCircle className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteBooking(booking.id)}
                                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    title="حذف"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {filteredBookings.length === 0 && (
                      <div className="text-center py-12 text-navy-400">
                        لا توجد طلبات
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Gallery Tab */}
              {activeTab === "gallery" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3 className="text-lg font-bold text-navy-900 mb-4">إضافة صورة جديدة</h3>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-gold-400 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-navy-600 mb-2">اسحب الصور هنا أو انقر للاختيار</p>
                      <p className="text-sm text-navy-400">JPG, PNG حتى 5MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {gallery.map((image) => (
                      <div key={image.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group">
                        <div className="aspect-square bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-gold-400" />
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium text-navy-900 text-sm">{image.title}</h4>
                          <p className="text-xs text-navy-500">{image.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Services Tab */}
              {activeTab === "services" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3 className="text-lg font-bold text-navy-900 mb-4">إضافة خدمة جديدة</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="عنوان الخدمة"
                        className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-400"
                      />
                      <input
                        type="text"
                        placeholder="الأيقونة"
                        className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-400"
                      />
                      <textarea
                        placeholder="وصف الخدمة"
                        rows={3}
                        className="md:col-span-2 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-gold-400 resize-none"
                      />
                    </div>
                    <button className="mt-4 btn-primary flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      إضافة الخدمة
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                        <h4 className="font-bold text-navy-900 mb-2">{service.title}</h4>
                        <p className="text-sm text-navy-600 mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-navy-400">{service.icon}</span>
                          <div className="flex gap-2">
                            <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
