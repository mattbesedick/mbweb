import './Home.css'
import Nav from '../../components/Navigation/Nav'
import HeroSvg from './HeroSvg'
import BlobSvg1 from './BlobSvg1'

const Home = () => {
    return (
        <div className="container">
            <Nav />
            <div className="hero-section">
                    <div className="intro">
                        <span className="hero-name">mb.</span>
                            <BlobSvg1 className="blob-svg1" />
                        <p>lorem ipsum paosdoasdpoas doasosdaopsd poasd opasdoasdopas opasdoaa</p>         
                    </div>
                    <div className="hero-svg">
                        <HeroSvg className="svg-logo" />
                    </div>
                </div>
            
        </div>
    )
}

export default Home;