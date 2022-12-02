
/*
module.exports = {
  trailingSlash: false,
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ];
  },
  async redirects() {
    return [];
  }
};
*/

/*
En fetch debo poner la ruta de acceso a mi back, 
en este caso localhost y el puerto que corresponda. 


Le digo el method y le envio los datos

function conseguirDatos() {
  fetch('https://localhost:3000/citas', { method: this.method,
    headers: { 'Access-Control-Allow-Origin': '*'} })
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
  .then(async(data) => { this.enviarDatos(data); })
  .catch((error) => {console.warn("Algo ha salido mal!", error)})
}

function envioPost() {
  fetch(this.URL, {
    method: this.method,
    body: this.datos,
    headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json"}
  })
}

function enviarDatos(datos) {
  this.dispatchEvent(new CustomEvent (this.event, {
    detail: {
      datos: datos.data,
      total: datos.total
    },
    bubbles: true,
    composed: true
  })
)}
*/