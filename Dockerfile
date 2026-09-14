# Laboratorio 2 - Containerización de un servidor web (Nginx)
# Imagen base oficial de Nginx, variante alpine (liviana)
FROM nginx:alpine

# Copiamos la página personalizada al directorio que Nginx
# sirve por defecto, reemplazando la página de bienvenida
COPY site/ /usr/share/nginx/html/

# El servidor web escucha en el puerto 80 DENTRO del contenedor
# (esto ya viene definido en la imagen base de nginx, se deja
# explícito aquí por claridad y para cumplir el requerimiento 3)
EXPOSE 80

# Nginx ya se ejecuta en primer plano por defecto en esta imagen,
# por lo que no es necesario sobreescribir CMD/ENTRYPOINT.
