const bcrypt = require('bcryptjs');

async function generatePassword() {
  const password = process.argv[2] || 'admin123';
  const hash = await bcrypt.hash(password, 10);
  console.log('\nPassword:', password);
  console.log('Hash:', hash);
  console.log('\nAdd this to your .env file:');
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
}

generatePassword().catch(console.error);
