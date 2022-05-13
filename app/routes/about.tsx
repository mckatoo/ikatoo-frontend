import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import SideMenu from '~/components/SideMenu'

// type AboutProps = {
//   skils: string[]
// }

export const loader: LoaderFunction = async ({ params }) => {
  const skils = [
    "ES5/ES6",
    "Node JS",
    "HTML",
    "CSS",
    "TypeScript",
    "REST",
    "JSON",
    "Wordpress",
    "Git",
    "Bootstrap",
    "ReactJS",
    "SQl",
    "npm",
    "PHP",
    "JAVA"
  ]

  return { skils }
}

export const meta: MetaFunction = () => ({
  title: "iKatoo - Milton Carlos Katoo - Desenvolvedor Web"
})

export default () => {
  return <>
    <SideMenu />

    {/* <div className="section-full page-about js-page-about">
      <div className="text-zone">
        <header>
          <h2 aria-label="My, Myself &amp; I" className="blast-root"><span className="blast" aria-hidden="true">M</span><span className="blast" aria-hidden="true">y</span><span className="blast" aria-hidden="true" >,</span> <span className="blast" aria-hidden="true" >M</span><span className="blast" aria-hidden="true" >y</span><span className="blast" aria-hidden="true" >s</span><span className="blast" aria-hidden="true" >e</span><span className="blast" aria-hidden="true" >l</span><span className="blast" aria-hidden="true" >f</span> <span className="blast" aria-hidden="true" >&amp;</span> <span className="blast" aria-hidden="true" >I</span></h2>
          <div className="fake-h2">My, Myself &amp; I</div>
        </header>

        <p>I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
        <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,</p>
        <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
        <p><a href="https://jacekjeznach.com/contact/" rel="contact">Let’s make something special.</a></p>


        <div className="clear"></div>

      </div>

      <div className="skills-charts">

        <div id="myCanvasContainer">
          <canvas width="500" height="500" id="myCanvas">
            <ul>
              <li>{ }</li>
            </ul>
          </canvas>
        </div>

        <div className="clear"></div>
      </div>
    </div> */}
  </>
}