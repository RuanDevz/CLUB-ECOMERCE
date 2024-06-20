const express = require('express')
const app = express()



app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  // Rota de callback após a autenticação bem-sucedida
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      // Redirecionamento após a autenticação bem-sucedida
      res.redirect('/perfil'); // Rota para o perfil do usuário
    }
  );
  
  // Rota para logout
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  