export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center navy-gradient">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60">جاري التحميل...</p>
      </div>
    </div>
  );
}
