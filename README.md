🚦 Semáforo de Silencio - Dashboard Cloud 🚦

Este repositorio contiene el frontend (dashboard web) del proyecto grupal **"Semáforo de Silencio"**, desarrollado para la materia **Sistemas de Hardware** de la carrera Ingeniería en Sistemas de la UAI.

Arquitectura y Tecnologías

El proyecto implementa una arquitectura IoT en la nube dividida en tres partes:

*   **Hardware:** Un microcontrolador ESP32 conectado a un micrófono MAX4466. Procesa el audio localmente y filtra el ruido eléctrico.
*   **Backend y Base de Datos:** Se utiliza **Adafruit IO** como broker MQTT para recibir la telemetría en tiempo real y almacenar el historial de datos.
*   **Frontend:** Este dashboard, desarrollado con HTML, CSS (Chart.js) y JavaScript (Fetch API), alojado de forma pública en **GitHub Pages**.

Funcionamiento del Dashboard

La página web se conecta directamente a la API REST de Adafruit IO para consumir los datos subidos por el ESP32. El dashboard muestra:
1. **Nivel de Ruido Actual:** Se actualiza automáticamente cada 3 segundos, cambiando de color según los umbrales configurados (Verde, Amarillo, Rojo).
2. **Gráfico en Tiempo Real:** Dibuja la curva histórica de los últimos niveles de ruido registrados en la base de datos de Adafruit.

🌐 **Ver Dashboard en vivo:** https://lucas2805g.github.io/SH-dashboard/

---

*Desarrollado por el grupo del proyecto: Dylan Pointis, Santiago Bravo, Juan Ignacio Lambezat y Lucas Gomez - 2026*
