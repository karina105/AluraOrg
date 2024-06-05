import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/karina105'>
                <img src="/img/icons8-github-64.png" alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/karina-monge-rojas/'>
                <img src="/img/icons8-linkedin-64.png" alt='linkedin' />
            </a>
        </div>
        <img src='/img/Logo (1).png' alt='org' />
        <strong>Desarrollado por Karina</strong>
    </footer>
}

export default Footer