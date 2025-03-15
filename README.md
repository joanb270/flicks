## Instrucciones para ejecutar y desplegar la aplicación

### Requisitos previos
- Python 3.8 o superior
- Node.js 14 o superior
- pip (gestor de paquetes de Python)
- Una cuenta en TMDB para obtener una API key

### Configuración local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/anime-streaming-site.git
cd anime-streaming-site
```

2. **Configurar el entorno virtual de Python**
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. **Instalar dependencias de Python**
```bash
pip install -r requirements.txt
```

4. **Configurar variables de entorno**
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```
FLASK_APP=src/app.py
FLASK_ENV=development
TMDB_API_KEY=tu_api_key_de_tmdb
JWT_SECRET_KEY=una_clave_secreta_para_jwt
```

5. **Inicializar la base de datos**
```bash
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

6. **Ejecutar el servidor backend**
```bash
flask run --host=0.0.0.0 --port=5000
```

7. **Servir los archivos frontend**
Puedes usar cualquier servidor web para servir los archivos estáticos en la carpeta `public/`. Por ejemplo, con Python:
```bash
cd public
python -m http.server 8000
```

8. **Acceder a la aplicación**
Abre tu navegador y visita:
- Frontend: http://localhost:8000
- Backend API: http://localhost:5000

### Despliegue en producción

#### Frontend (Vercel, Netlify, GitHub Pages)

1. **Preparar para producción**
   - Asegúrate de que todas las URLs de API en el frontend apunten a tu backend desplegado.

2. **Desplegar en Vercel**
   - Instala Vercel CLI: `npm i -g vercel`
   - Ejecuta: `vercel` desde la carpeta `public/`
   - Sigue las instrucciones para completar el despliegue.

#### Backend (Render, Heroku, PythonAnywhere)

1. **Preparar para producción**
   - Crea un archivo `requirements.txt` con todas las dependencias:
   ```
   Flask==2.0.1
   Flask-Cors==3.0.10
   Flask-SQLAlchemy==2.5.1
   Flask-JWT-Extended==4.3.1
   requests==2.26.0
   gunicorn==20.1.0
   python-dotenv==0.19.1
   ```

2. **Desplegar en Render**
   - Crea una cuenta en Render.com
   - Crea un nuevo Web Service
   - Conecta tu repositorio de GitHub
   - Configura el comando de inicio: `gunicorn src.app:app`
   - Configura las variables de entorno necesarias
   - Haz clic en "Create Web Service"

### Notas importantes

- **API Key de TMDB**: Necesitarás obtener una API key de TMDB (https://www.themoviedb.org/documentation/api) para que la aplicación funcione correctamente.
- **Seguridad**: En producción, asegúrate de usar claves secretas fuertes para JWT y configurar CORS adecuadamente.
- **Base de datos**: Para producción, considera usar una base de datos más robusta como PostgreSQL en lugar de SQLite.
- **Contenido**: Esta aplicación utiliza TMDB solo para metadatos. Asegúrate de tener los derechos necesarios para cualquier contenido de video que añadas a través del panel de administración.

### Acceso al panel de administración

1. Inicia sesión con las credenciales de administrador:
   - Usuario: admin
   - Contraseña: admin123

2. Accede al panel de administración en: `/admin.html`

### Personalización

- Puedes modificar los colores y estilos en `public/css/style.css`
- Para cambiar el logo, reemplaza `public/img/logo.png`
- Para añadir más funcionalidades, modifica los archivos JavaScript en `public/js/`
