import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
      laudantium dignissimos unde aut numquam repellat maxime rem porro, odit
      optio harum quam nihil sit voluptatibus, veritatis eveniet, perspiciatis
      ut qui.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Albert5a&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Albert5a&layout=compact&langs_count=7&theme=dark" />
    </GithubSecao>
  </section>
)

export default About
