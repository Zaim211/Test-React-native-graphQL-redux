# **Affichage des Posts et Détails**

Ce projet affiche une liste de posts avec leurs titres et montre les détails d'un post sélectionné, y compris l'ID et le titre. Les données sont récupérées via une API GraphQL et gérées via Redux.

---

## **Vue d'Ensemble du Projet**

L'application permet aux utilisateurs de :
1. Voir une liste de posts avec une limite de 30 éléments.
2. Cliquer sur un post pour voir ses détails (ID et titre).
3. Utiliser Redux pour la gestion de l'état afin de passer des paramètres entre la liste et l'écran de détail.

---

## **Détails de l'API**

- **URL de Base**: [https://graphqlzero.almansi.me/](https://graphqlzero.almansi.me/)
- **Requête**: Obtenir Tous les Posts

---

## **Table des Matières** 📚

- [Démarrage Rapide](#démarrage-rapide)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Configuration](#configuration)
- [Exécution du Projet](#exécution-du-projet)
- [Captures d'Écran](#captures-décran)

---

## **Démarrage Rapide** 🤸

Pour commencer avec ce projet, suivez les instructions ci-dessous :

1. **Cloner le Dépôt** :
    ```bash
    git clone https://github.com/Zaim211/Test-React-native-graphQL-redux.git
    cd test-react-native
    ```

2. **Installer les Dépendances** :
    ```bash
    npm install
    npm install -g expo-cli
    npm install @reduxjs/toolkit react-redux @apollo/client graphql
    ```



---
## **Exécution du Projet** 🚀

1. **Démarrer le serveur de développement Expo** :
    ```bash
    npm start
    ```

2. **Ouvrir l'application Expo** sur votre appareil mobile ou émulateur et scanner le code QR fourni par le serveur de développement.

3. **Naviguer dans l'application** pour voir la liste des posts et les détails.

---

## **Fonctionnalités** ✨

- **Affichage des Titres des Posts** : Liste jusqu'à 30 posts.
- **Vue des Détails du Post** : Affiche les détails (ID et titre) d'un post sélectionné.
- **Gestion de l'État** : Utilise Redux pour gérer et passer les données entre les écrans.
- **Intégration GraphQL** : Récupère les données en utilisant des requêtes GraphQL.

---

## **Technologies Utilisées** 🛠️

- **Frontend**: React Native
- **Gestion de l'État**: Redux
- **API**: GraphQL
- **Styling**: Styles personnalisés avec React Native

---

