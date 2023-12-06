import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Category, {filterCategories, categories} from '../../components/Category';
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel';
import ScrollToTopButton from '../../components/ScrollToTopButton'

function Home() {

  return (
    <div>
      <ScrollToTopButton />
      <Header />
      <Banner image={'banner_2.jpeg'}/>
      <Container>
         {
          categories.map((category, id) => {
          return <Category category={category} key={id}> 
                    <Carousel>
                      {filterCategories(id).map(video =>  <Card id={video.id} key={video.id} />)} 
                    </Carousel>
                  </Category>
        })}  
      </Container>
      <Footer />
    </div>
    );
}
export default Home;
