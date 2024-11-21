import Container from "../_components/container";

export default function About() {
  return (
    <main>
      <Container>
        <address className="mt-32 text-center">
          <h2 className="text-3xl">Contact US</h2>
          <ul className="mt-4 text-lg">
            <li className="underline">
              <a href="https://github.com/natainakata" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://mk.shrimpia.network/@natainakata"
                target="_blank"
              >
                <span className="underline">Fediverse</span>
                <br />
                (シュリンピア帝国)
              </a>
            </li>
          </ul>
        </address>
      </Container>
    </main>
  );
}
