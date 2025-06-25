import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propsImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function header() {
    const description = reactDescriptions[getRandomInt(2)];

    return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcept({ title, description, image }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
        {header()}
        <main>
            <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                <CoreConcept 
                title="Components" 
                description="The core UI building block." 
                image={componentsImg} 
                />
                <CoreConcept
                title="JSX"
                description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
                image={jsxImg}
                />
                <CoreConcept
                title="Props"
                description="Make components configurable (and therefore reusable) by passing input data to them."
                image={propsImg}
                />
                <CoreConcept
                title="State"
                description="React-managed data which, when changed, causes the component to re-render & the UI to update."
                image={stateImg}
                />
            </ul>
            </section>
        </main>
        </div>
    );
}

export default App;