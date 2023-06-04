import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import { FaPlug, FaRobot, FaSitemap, FaDesktop, FaLocationArrow, FaInstagram, FaWhatsapp, FaGithub, FaAddressBook, FaUserTie, FaHome, FaEnvelope, FaBriefcase, FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa'

export const Index = () => {
  return (
    <div className="flex justify-center h-screen bg-[url('/home-background.jpg')] bg-no-repeat image-full bg-center	bg-cover">
      <div id="lines" className='absolute h-screen w-[80vw] top-0 left-0 right-0 m-auto'>
        <div className="line opacity-20 ml-[-50%] absolute h-screen w-[1px] top-0 left-[50%] bg-white overflow-hidden"></div>
        <div className="line opacity-20 absolute h-screen w-[1px] top-0 left-[50%] bg-white overflow-hidden"></div>
        <div className="line opacity-20 ml-[-25%] absolute h-screen w-[1px] top-0 left-[50%] bg-white overflow-hidden"></div>
        <div className="line opacity-20 ml-[25%] absolute h-screen w-[1px] top-0 left-[50%] bg-white overflow-hidden"></div>
        <div className="line opacity-20 ml-[50%] absolute h-screen w-[1px] top-0 left-[50%] bg-white overflow-hidden"></div>
      </div>
      <div className="text-center-view text-center self-center pl-32">
        <h1 className="text-8xl font-bold text-white pb-8">Carlos Vinicius</h1>
        <div className="cd-headline rotate-1">
          <span className="cd-words-wrapper text-2xl">
            <b>Desenvolvedor Web</b>
          </span>
        </div>
      </div>
      <div className="absolute pt-16 right-20">
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-center">
            <a href="https://instagram.com/viniciusgdr1">
              <FaInstagram />
            </a>
          </div>
          <div className="flex justify-center mt-3">
            <a href="mailto:viniciusgdr@outlook.com">
              <FaMailBulk />
            </a>
          </div>
          <div className="flex justify-center mt-3">
            <a href="https://github.com/viniciusgdr">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export const About = () => {
  return (
    <div className="flex justify-center h-screen">
      <section className="container pr-[15px] pl-[15px] max-w-3xl">
        <div className="row mt-[70px] mb-[70px] text-center text-6xl">
          <h2>Sobre mim</h2>
        </div>

        <div className="bg-[#070708] flex flex-col border rounded-lg mb-[30px] pt-4 pb-4 items-center text-center">
          <Image
            alt='Foto de perfil'
            src="https://img.kalunga.com.br/fotosdeprodutos/479735z_1.jpg"
            className="rounded-full bg-center border-4 border-white"
            width={200}
            height={200}
          />
          <div className="pl-4 self-center pt-4">
            <h2 className='text-2xl pb-2'>Desenvolvedor Web</h2>
            <h3 className='text-blue-500 flex items-center justify-center'>
              <FaLocationArrow />{'  '}
              Camaragibe - PE
            </h3>
            <p className='max-w-xl pt-3'>🖥️ Muito {getGreetings()}! Me chamo Carlos Vinicius, tenho 15 anos. Meu foco de atuação é no segmento back end 🚀</p>
          </div>
        </div>
        <div className="bg-[#070708] flex flex-col border rounded-lg pt-4 pb-4 text-center">
          <div className="grid grid-cols-2">
            <div className=" text-center place-self-center">
              <h1 className='text-2xl'>Freelancer</h1>
              <a className='text-blue-500'>Disponível</a>
            </div>
            <div className="text-center place-self-center">
              <p className='text-2xl'>Curriculum</p>
              <a href="/curriculum.pdf" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Baixar</a>
            </div>
          </div>
        </div>
        <div className="row mt-[70px] mb-[30px] text-center text-4xl">
          <h2>Serviços</h2>
        </div>
        <div className="bg-[#070708] border rounded-lg pt-2 pb-4 text-center">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-2 gap-8">
            <div className="rounded bg-slate-500 pt-4 pb-4 flex flex-col text-center place-self-center items-center">
              <FaDesktop size={50} />
              <h1 className='text-2xl'>Desenvolvimento Web</h1>
              <a>Desenvolvimento de sistemas para internet escaláveis, com qualidade e personalização. Sempre de olho em novas tendências e utilizando as melhores tecnologias do mercado sempre alinhadas com os seus objetivos.</a>
            </div>
            <div className="rounded bg-slate-500 pt-4 pb-4 flex flex-col text-center place-self-center items-center">
              <FaSitemap size={50} />
              <p className='text-2xl'>Criação de Sites</p>
              <a>Sites profissionais, personalizados e responsivos de alta performance e otimizados para o Google. Aumente a visibilidade do seu negócio na internet e gere credibilidade para a sua empresa.</a>
            </div>
            <div className="rounded bg-slate-500 pt-4 pb-4 flex flex-col text-center place-self-center items-center">
              <FaRobot size={50} />
              <p className='text-2xl'>Criação de Bots</p>
              <a>Automatize seus processos (atendimento ao cliente, suporte, etc) com nossas soluções de chatbots inteligentes para Whatsapp, Telegram, Discord, etc.</a>
            </div>
            <div className="rounded bg-slate-500 pt-4 pb-4 flex flex-col text-center place-self-center items-center">
              <FaPlug size={50} />
              <p className='text-2xl'>Integração entre Sistemas</p>
              <a>A integração de sistemas é um processo que tem o propósito de reunir duas ou mais soluções empresariais em apenas uma ou deixá-las interligadas.</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
export const Contact = () => {
  return (
    <div className="flex justify-center h-screen">
      <section className="container pr-[15px] pl-[15px] max-w-3xl">
        <div className="row mt-[70px] mb-[70px] text-center text-6xl">
          <h2>Contato</h2>
        </div>
        <div className="bg-[#070708] flex flex-col border rounded-lg pt-4 pb-4 text-center">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col text-center place-self-center items-center pb-8 pt-8">
              <FaMailBulk size={40} />
              <p>viniciusgdr@outlook.com</p>
              <p>Email</p>
            </div>
            <div className="flex flex-col text-center place-self-center items-center pb-8 pt-8">
              <FaMapMarkerAlt size={40} />
              <p>Camaragibe - PE</p>
              <p>Localização</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export const getGreetings = () => {
  const date = new Date()
  const hours = date.getHours()
  let greetings = ''
  if (hours >= 0 && hours < 12) {
    greetings = 'Bom dia'
  } else if (hours >= 12 && hours < 18) {
    greetings = 'Boa tarde'
  } else {
    greetings = 'Boa noite'
  }
  return greetings
}
export default function Home() {
  const router = useRouter()
  return (
    <>
      <nav className="header-main fixed w-[10%] h-screen bg-[rgba(14,15,16,.6)] top-0">
        <h2 className='pt-8 text-center text-4xl'>CV</h2>
        <div className="flex flex-col h-full pt-16">
          <div className="flex justify-center">
            <a href="#home" onClick={
              (e) => {
                e.preventDefault()
                router.push('/')
              }
            }>
              <FaHome size={25} />
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a href="#about" onClick={
              (e) => {
                e.preventDefault()
                router.push('/#about')
              }
            }>
              <FaUserTie size={25} />
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a href="#resumo" onClick={
              (e) => {
                e.preventDefault()
                router.push('/#resumo')
              }
            }>
              <FaAddressBook size={25} />
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a href="#portfolio" onClick={
              (e) => {
                e.preventDefault()
                router.push('/#portfolio')
              }
            }>
              <FaBriefcase size={25} />
            </a>
          </div>
          <div className="flex justify-center mt-10">
            <a href="#contact" onClick={
              (e) => {
                e.preventDefault()
                router.push('/#contact')
              }
            }>
              <FaEnvelope size={25} />
            </a>
          </div>
        </div>
      </nav>
      {
        router.asPath === '/#home' || router.asPath === '/' ? <Index /> :
          router.asPath === '/#about' ? <About /> : 
          router.asPath === '/#contact' ? <Contact /> : (
            <h1 className="text-center">Not implemented.</h1>
          )
      }
    </>
  )
}
