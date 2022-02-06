import {useEffect} from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

function HomePage() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
      <div className="homepage__container">
        <div className="homepage__main">
           <div className="main__content">
             Your one stop place to view videos
           </div>

           <div className="explore__link">
              <Link to="/explore">
                Explore
              </Link>
           </div>
        </div>

        <div className="homepage__view">
          <div className="content__text">

            <div className="text__main">
              Learn Programming
            </div>
            Selected videos from freecodecamp youtube channel which has some good beginner friendly programming videos.
          </div>

          <div className="content__img">
            <img src="https://sm.pcmag.com/pcmag_in/review/f/free-code-/free-code-camp_8ueh.jpg" alt="freecodecamp" />
          </div>
        </div>

        <div className="homepage__view reverse__flex">

          <div className="content__text">

            <div className="text__main">
              Get Insights
            </div>
            Selected videos from recro youtube channel which have industry persons sharing their knowledge.
          </div>

          <div className="content__img">
            <img src="https://i.ytimg.com/vi/ENJgMIYLCnI/maxresdefault.jpg" alt="recro" />
          </div>

        </div>

        <footer>
            <div className="footer__text">
              Made by Poojesh Shetty
            </div>

            <div className="footer__btn">
              <a target="_blank" className="btn__img" href="https://www.linkedin.com/in/poojesh-shetty/" rel="noreferrer">
                <img src="https://w7.pngwing.com/pngs/370/508/png-transparent-logo-linkedin-computer-icons-social-media-linked-angle-text-logo.png" alt="linkedin" />
              </a>
              <a target="_blank" className="btn__img" href="https://twitter.com/ShettyPoojesh" rel="noreferrer">
                <img src="https://toppng.com/uploads/preview/twitter-logo-black-11549680426ohdamjlf5z.png" alt="twitter" />
              </a>
              <a target="_blank" className="btn__img" href="https://github.com/PoojeshShetty" rel="noreferrer">
                <img src="https://www.kindpng.com/picc/m/694-6943896_github-logo-png-github-icon-png-transparent-png.png" alt="github" />
              </a>
            </div>
        </footer>
      </div>
  )
}

export default HomePage;
