# cloud-computing-containerizacion-nginx

Containerización de un servidor web con Nginx (Docker).

## Estructura

```
cloud-computing-containerizacion-nginx/
├── Dockerfile
├── site/                  # contenido servido por Nginx
│   ├── index.html
│   ├── css/style.css
│   └── js/script.js
├── informe/
│   ├── informe.tex
│   └── figuras/           # aquí van las capturas (ver nombres en el .tex)
├── prompts.md              # prompts de IA usados, para el entregable
└── README.md
```

Antes de construir la imagen, edita `site/js/script.js` y reemplaza
`STUDENT.grupo` con el nombre/número real de tu grupo de laboratorio.

## Comandos

Construir la imagen:

```bash
docker build -t cc-lab2-nginx .
```

Ejecutar el contenedor, publicando el puerto 15619 de la VM hacia el 80
del contenedor:

```bash
docker run -d --name cc-lab2 -p 15619:80 cc-lab2-nginx
```

Verificar que está corriendo:

```bash
docker ps
```

Probar en el navegador (o con curl) desde la VM:

```
http://localhost:15619
```

Detener y volver a levantar el contenedor (para el requerimiento 10):

```bash
docker stop cc-lab2
docker start cc-lab2
```

`docker start` reutiliza el mismo contenedor (no crea uno nuevo), por lo
que conserva su ID, su estado de filesystem y se vuelve a publicar en el
mismo puerto 15619 sin necesidad de volver a pasar `-p`.

## Limpieza

```bash
docker rm -f cc-lab2
docker rmi cc-lab2-nginx
```
