import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
    
      <div class="col-sm-4 p-5">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div class="fakeimg">Fake Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3 class="mt-4">Some Links</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
        <hr className="d-sm-none" />

      </div>
     
    </div>
  )
}

export default About
