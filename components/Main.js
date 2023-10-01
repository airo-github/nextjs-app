import { Links } from '../components/Links';
import { Headline } from '../components/Headline';

export function Main(props) {
  return (
    <main>
      <Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
