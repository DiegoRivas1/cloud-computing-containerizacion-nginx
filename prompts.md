# Prompts de IA utilizados

Registro de los prompts principales usados como apoyo (investigación de
sintaxis, resolución de errores y comprensión de instrucciones de
Docker), tal como pide el punto 6 del enunciado.

1. "Necesito construir una imagen de Docker que ejecute Nginx y sirva
   una página HTML personalizada en vez de la página por defecto.
   ¿Cómo estructuro el Dockerfile y en qué carpeta debo copiar mi
   HTML/CSS/JS para que Nginx los sirva correctamente?"

2. "¿Cuál es la diferencia entre EXPOSE y el flag -p al correr un
   contenedor? Quiero que el contenedor escuche en el puerto 80 pero
   que la máquina virtual exponga ese servicio en el puerto 15619."

3. "¿Qué diferencia hay entre `docker stop` + `docker start` y
   `docker rm` + `docker run` de nuevo? Quiero entender si al detener
   y volver a levantar el mismo contenedor se pierde algo (IP, datos,
   configuración de puertos)."

4. "Ayúdame a organizar el proyecto en carpetas separadas para HTML,
   CSS y JS, siguiendo buenas prácticas, en lugar de tener todo en un
   solo archivo."

5. "Explícame en pocas líneas, para el informe, la diferencia
   conceptual entre el puerto de la máquina virtual y el puerto del
   contenedor en un mapeo `-p 15619:80`."

> Nota: estos prompts resumen las consultas realizadas durante el
> desarrollo del laboratorio con apoyo de Claude (Anthropic). El grupo
> comprende y puede explicar cada instrucción del Dockerfile y de los
> comandos Docker usados (ver Sección 5 del informe).
