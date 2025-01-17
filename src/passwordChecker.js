export class Main {
    // Vérifie si le mot de passe a au moins 8 caractères
    isValidPassword(password) {
      if (password.length <= 8) {
        return false; 
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
      }
      return true; 
    }
  
   




  }
  