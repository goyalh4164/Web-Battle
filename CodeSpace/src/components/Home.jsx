import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            {/* <h1>TechReact</h1>
            <p>Frontend Framework</p> */}
            <h1>CODESPACE</h1>
            <p style={{"fontSize":"30px"}}><i>We Make Devs</i></p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
          At CodeSpace, you learn and grow exactly how you would on a real job. You will start from the
fundamentals, receive support from our mentors and community, and build your way to the top
- through professional work-like Full-stack and Backend web development projects.
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Alumni</h1>

          <article>
            <div
              style={{
                animationDelay: "1s",
              }}
            >

              <AiFillGoogleCircle/>
              {/* <p>Google</p> */}
              <hr style={{"marginTop":"20px","width":"250px" ,"height":"2px" ,"backgroundColor":"black","opacity":"0.6"}}/>
              <p>Nitin</p>
              <p>"My experience at CodeSpace is great and memorable. The mentors at CodeSpace helped us enhance my academic and interpersonal skills. "</p>
              
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <hr style={{"marginTop":"20px","width":"250px" ,"height":"2px" ,"backgroundColor":"black","opacity":"0.6"}}/>

              <p>Dhruv</p>
              <p>"My experience at CodeSpace is great and memorable. The mentors at CodeSpace helped us enhance my academic and interpersonal skills. "</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <hr style={{"marginTop":"20px","width":"250px" ,"height":"2px" ,"backgroundColor":"black","opacity":"0.6"}}/>

              <p>Pawan</p>
              <p>"Overall it was a great experience and lifetime memory at CodeSpace. If you want to make a career in CSE I would highly recommend you to join CodeSpace.”</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <hr style={{"marginTop":"20px","width":"250px" ,"height":"2px" ,"backgroundColor":"black","opacity":"0.6"}}/>

              <p>Isha</p>
              <p>"all the teachers are very supportive and friendly and the placement process has been very smooth throughout. "</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
