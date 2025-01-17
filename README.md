📌 IPL-social
Auteur : Kevin Akator
Email : kevin.akator@student.vinci.be
GitHub Repository : https://github.com/kevatorVinci/IPL-social

📖 Description du projet
IPL-social est un projet DevOps contenant une fonction de validation de mot de passe en JavaScript et un pipeline GitHub Actions pour assurer l'intégration continue (CI).

Le projet suit la méthodologie TDD (Test-Driven Development).
Il utilise Node.js et Jest pour les tests automatisés.
La pipeline GitHub Actions exécute les tests automatiquement à chaque Pull Request (PR) vers la branche main.
📂 Structure du projet
plaintext
Copy
Edit
📦 IPL-social
├── 📂 .github/workflows/   # Contient la configuration CI GitHub Actions
│   ├── ci.yml              # Fichier de pipeline GitHub Actions
├── 📂 tests/               # Contient les tests unitaires
├── passwordChecker.js      # Fonction de validation de mot de passe
├── passwordChecker.test.js # Fichier de tests unitaires
├── package.json            # Fichier de configuration npm
├── README.md               # Documentation du projet
⚙️ Installation et configuration
1️⃣ Installer Node.js et npm
Si Node.js n’est pas installé, téléchargez-le depuis Node.js.
Vérifiez l’installation avec :

sh
Copy
Edit
node -v
npm -v
2️⃣ Cloner le projet
sh
Copy
Edit
git clone https://github.com/kevatorVinci/IPL-social.git
cd IPL-social
3️⃣ Installer les dépendances
sh
Copy
Edit
npm install
🚀 Exécution des tests
Pour exécuter les tests unitaires, utilisez la commande suivante :

sh
Copy
Edit
npm test
Le script utilise Jest pour valider le bon fonctionnement de passwordChecker.js.

📌 Fonctionnalités de la validation de mot de passe
Le fichier passwordChecker.js contient une fonction qui valide un mot de passe selon les critères suivants :
✅ Minimum 8 caractères
✅ Au moins un caractère spécial (!@#$%^&*...)
✅ Au moins un chiffre (0-9)
✅ Ne doit pas contenir "IPL" (insensible à la casse)

🛠️ Configuration de GitHub Actions (CI/CD)
Le fichier .github/workflows/ci.yml est configuré pour :

S'exécuter automatiquement lors d'une Pull Request vers main.
Installer Node.js et les dépendances.
Exécuter les tests unitaires pour valider le code.
📌 Commandes Git utiles
sh
Copy
Edit
# Initialiser un dépôt Git
git init

# Ajouter les fichiers au commit
git add .

# Valider les changements
git commit -m "Premier commit"

# Pousser le projet sur GitHub
git branch -M main
git remote add origin https://github.com/kevatorVinci/IPL-social.git
git push -u origin main

# Créer une nouvelle branche pour ajouter des fonctionnalités
git checkout -b feature-new

# Fusionner une branche après validation
git checkout main
git merge feature-new
📩 Accès aux correcteurs
Les permissions ont été accordées aux emails suivants :

sebastien.debeauffort@vinci.be
jerome.plumat@vinci.be

🔹 Aide et Ressources
Ce projet a été réalisé avec l'assistance de ChatGPT pour structurer le pipeline CI/CD, appliquer la méthodologie TDD, et rédiger la documentation.

Toutes les étapes ont été suivies et mises en œuvre personnellement, en respectant les consignes de l'examen.

