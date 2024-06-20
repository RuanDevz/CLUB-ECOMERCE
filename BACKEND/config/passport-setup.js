const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {User} = require('../models');
const express = require('express')
const app = express()

passport.use(
  new GoogleStrategy(
    {
      // Configurações da estratégia de autenticação do Google
      clientID: 'SEU_CLIENT_ID',
      clientSecret: process.env.SESSION_SECRET,
      callbackURL: 'http://localhost:3001/auth/google/callback', // URL de callback após a autenticação
    },
    async (accessToken, refreshToken, profile, done) => {
      // Função de callback que será chamada após a autenticação com o Google
      try {
        // Verifique se o usuário já existe no banco de dados
        let user = await User.findOne({ where: { googleId: profile.id } });
        if (user) {
          done(null, user); // Se o usuário já existir, retorne o usuário
        } else {
          // Se o usuário não existir, crie um novo usuário no banco de dados
          user = await User.create({
            googleId: profile.id,
            username: profile.displayName,
            // Outras informações do usuário, se necessário
          });
          done(null, user); // Retorne o novo usuário criado
        }
      } catch (err) {
        done(err, null); // Em caso de erro, retorne o erro
      }
    }
  )
);

// Serialize o usuário para armazenamento na sessão
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize o usuário a partir do ID armazenado na sessão
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user); // Retorne o usuário da sessão
  } catch (err) {
    done(err, null); // Em caso de erro, retorne o erro
  }
});

app.use(passport.initialize());
app.use(passport.session());

module.exports = passport
