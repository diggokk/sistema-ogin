document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Remover alertas anteriores se existirem
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Credenciais válidas (substitua com suas informações)
        const validUsername = "Diogo";
        const validPassword = "10112008"; // 10/11/2008
        
        if (username === validUsername && password === validPassword) {
            showAlert('Login realizado com sucesso!', 'success');
            // Redirecionar para outra página após login bem-sucedido
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Página para onde será redirecionado
            }, 1500);
        } else {
            showAlert('Usuário ou senha incorretos. Tente novamente.', 'error');
        }
    });
    
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${type}`;
        alertDiv.appendChild(document.createTextNode(message));
        
        // Inserir o alerta após o formulário
        loginForm.parentNode.insertBefore(alertDiv, loginForm.nextSibling);
        
        // Remover o alerta após 3 segundos (apenas para mensagens de erro)
        if (type === 'error') {
            setTimeout(() => {
                alertDiv.remove();
            }, 3000);
        }
    }
});