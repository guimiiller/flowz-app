import mongoose from "mongoose";

// Schema do usuário com favoritos como um array de objetos
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Verifica se o model já existe para evitar erro em hot reload
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
