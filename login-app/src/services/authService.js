import { authClient } from '../http/authClient.js';

function register({ email, password }) {
  return authClient.post('/register', { email, password })
}

function login({ email, password }) {
  return authClient.post('/login', { email, password })
}

function logout() {
  return authClient.post('/logout')
}

function activate(activationToken) {
  return authClient.get(`/activation/${activationToken}`);
}

function refresh() {
  return authClient.get('/refresh');
}

export const authService = { register, login, logout, activate, refresh };
