import {readdirSync} from 'node:fs'
import {join} from 'node:path'
import express from 'express'
import {renderToPipeableStream} from 'react-dom/server'

const app = express()

app.use(express.static('dist'))

const pages = readdirSync(join(process.cwd(), 'pages')).map(page => page.split('.')[0])

pages.forEach(page => {
  app.get(`/${page}`, async (req, res) => {
    const mod = await import(`./pages/${page}`)
    const Component = mod.default

    let props = {}
    if (mod.gSSP) {
      props = await mod.gSSP(req)
    }

    const {pipe} = renderToPipeableStream(<Component {...props} />, {
      bootstrapScripts: ["/client.js"]
    })
    pipe(res)
  })
})


app.listen(3000, () => {
  console.log('Listening on port 3000')
})