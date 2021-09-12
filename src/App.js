import { GlobalStyle } from './globalStyle';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import { Container, Page } from './sharedStyling';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact }
]

function App() {

  const onEnter = node => {
    gsap.from(0.6,
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    gsap.to(0.6,
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit
                onExit={onExit}
                onEnter={onEnter}>
                <Page>
                  <Component />
                </Page>
              </CSSTransition>
            )}

          </Route>
        ))}
      </Container>
    </>
  );
}

export default App;
