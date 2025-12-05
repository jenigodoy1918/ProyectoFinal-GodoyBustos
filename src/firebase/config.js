import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBS3FpBsoDAkSFhdMW-ucAkw9djz_uXlYM",
  authDomain: "proyectofinal-godoybustos.firebaseapp.com",
  projectId: "proyectofinal-godoybustos",
  storageBucket: "proyectofinal-godoybustos.firebasestorage.app",
  messagingSenderId: "419340166202",
  appId: "1:419340166202:web:615bed6ed39e252f660103"
};

const app = initializeApp(firebaseConfig);

export default app;