const coursesData = [
    {
        "id": 1,
        "title": "Curso de Terraform com AWS",
        "category": "programacao",
        "instructor": "Cleber Gasparoto",
        "level": "Iniciante",
        "duration": "3h 48m",
        "date": "2021",
        "favorite": false,
        "poster": "https://img.youtube.com/vi/bIPF_hzmQGE/maxresdefault.jpg",
        "description": "Neste curso serão ensinados conceitos básicos à intermediários do Terraform para entender como ele funciona e se integra junto com a AWS. Você irá aprender a criar recursos na AWS utilizando as mais variadas funcionalidades do Terraform.",
        "lessons": [
            {
                "title": "O que é e para o que serve o Terraform?",
                "duration": "4:21",
                "thumb": "https://img.youtube.com/vi/bIPF_hzmQGE/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/bIPF_hzmQGE?rel=0",
                "description": "Curso completo de Terraform 1.6: https://bit.ly/4bj6aUK\n\nO que exatamente é o Terraform?\nTerraform é uma ferramenta para construir, alterar e criar versões de infraestrutura com segurança e eficiência através de código. \n\nPrincipais características:\nInfraestrutura como Código (IaC)\n- Open source e declarativo\n- Permite versionamento (evolução da infraestrutura e automação)\n- Idempotente\n- Sintaxe high-level e reusável\n- Paridade de ambiente\nPlanos de execução\n- Segurança e previsibilidade\n- Separação de planejamento e aplicação\nHíbrido\n- Agnóstico\n- Permite deployar para múltiplos provedores simultaneamente\n\nCasos de uso:\n- Criar ou provisionar uma nova infraestrutura;\n- Gerenciar a infraestrutura existente;\n- Replicar a infraestrutura.\n\nComo o Terraform funciona?\nCore do Terraform usa duas fontes de entrada:\n- Seus arquivos de configuração (seu estado desejado);\n- O estado atual, que é gerenciado pelo Terraform.\nProviders: Os provedores expõem recursos, o que possibilita a criação de infraestrutura em todas essas plataformas:\n- IaaS: AWS, GCP, Azure\n- PaaS: Kubernetes, Heroku, Digital Ocean\n- SaaS: New Relic, Datadog\n\nTerraform vs. Outros Softwares\n\nTerraform é uma ferramenta de alto nível de orquestração de infraestrutura. \n\nAnsible, Puppet, Chef e outras ferramentas de gerenciamento de configuração:\n- Não é a intenção gerenciar configuração;\n- Provedores podem usar essas ferramentas.\nCloudFormation e outras ferramentas IaC:\n- Dá suporte para apenas um vendor específico.\n\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nSiga-me no Twitter: https://twitter.com/clebergasparoto\nVisite meu site: https://clebergasparoto.com"
            },
            {
                "title": "Como instalar o Terraform em 2 minutos",
                "duration": "2:40",
                "thumb": "https://img.youtube.com/vi/YhMuuUwQhhU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/YhMuuUwQhhU?rel=0",
                "description": "Curso completo de Terraform 1.6: https://bit.ly/4bj6aUK\n\nAprenda a instalar o Terraform CLI na sua máquina de forma fácil e rápida!\n\nLinks mencionados no vídeo:\nSite do Terraform: http://bit.ly/35K2onc\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nSiga-me no Twitter: https://twitter.com/clebergasparoto\nVisite meu site: https://clebergasparoto.com"
            },
            {
                "title": "tfenv: o gerenciador de versões do Terraform",
                "duration": "3:24",
                "thumb": "https://img.youtube.com/vi/8St_qwGQrPQ/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/8St_qwGQrPQ?rel=0",
                "description": "Curso completo de Terraform 1.6: https://bit.ly/4bj6aUK\n\nAprenda a gerenciar as versões do Terraform como um profissional, conheça o tfenv, sua ferramenta para navegar facilmente entre as variadas versões do Terraform.\n\nLinks mencionados no vídeo:\ntfenv: http://bit.ly/3bP1EB2\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nSiga-me no Twitter: https://twitter.com/clebergasparoto\nVisite meu site: https://clebergasparoto.com"
            },
            {
                "title": "Configurando editor de texto para o melhorar a produtividade do Terraform",
                "duration": "1:44",
                "thumb": "https://img.youtube.com/vi/Aw0xNNmlSGs/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/Aw0xNNmlSGs?rel=0",
                "description": "Aprenda a configurar seu editor de texto/IDE para aumentar sua produtividade com o Terraform. Aqui vemos duas ferramentas, Webstorm (paga) e VSCode (gratuita).\n\nLinks mencionados no vídeo:\nWebstorm: http://bit.ly/30L2HuZ\nPlugin Webstorm: http://bit.ly/3cqCrvF\nVSCode: http://bit.ly/30Erl0p\nPlugin VSCode: http://bit.ly/38wMPk3\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como criar uma conta na AWS em 2021",
                "duration": "2:38",
                "thumb": "https://img.youtube.com/vi/ctdknxufrmU/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ctdknxufrmU?rel=0",
                "description": "Veja como é simples e rápido criar uma conta na AWS em 2021. Com uma conta na AWS você pode começar seus projetos e/ou estudos na nuvem (cloud).\n\nLinks mencionados no vídeo:\n- Site da AWS: https://aws.amazon.com/\n- Site da AWS em Português: https://aws.amazon.com/pt\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como configurar AWS para usar o Terraform",
                "duration": "4:53",
                "thumb": "https://img.youtube.com/vi/2Q39eWPLVpg/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/2Q39eWPLVpg?rel=0",
                "description": "Curso completo de Terraform 1.6: https://bit.ly/4bj6aUK\n\nAprenda a configurar um usuário na AWS para ser usado pelo Terraform CLI. Com essa configuração você será capaz de criar todos os recursos da sua infraestrutura dentro da AWS utilizando o Terraform.\n\nLinks mencionados no vídeo:\n\nLink para criar conta na AWS: http://amzn.to/3bI1X03\nAWS CLI: http://amzn.to/2Nevpl3\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nSiga-me no Twitter: https://twitter.com/clebergasparoto\nVisite meu site: https://clebergasparoto.com"
            },
            {
                "title": "Como criar um S3 bucket na AWS",
                "duration": "1:56",
                "thumb": "https://img.youtube.com/vi/ZzZZvqbFjF4/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/ZzZZvqbFjF4?rel=0",
                "description": "Antes de começarmos a por a mão no código vamos entender como é o processo de criação de um AWS S3 bucket manualmente. Desta forma quando formos implementá-lo no Terraform será mais fácil a compreensão de cada item e propriedade escritas.\n\nLinks mencionados no vídeo:\nAWS S3: http://amzn.to/3la22wO\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "O que é o Terraform CLI",
                "duration": "3:21",
                "thumb": "https://img.youtube.com/vi/OWLpFgk9O4c/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/OWLpFgk9O4c?rel=0",
                "description": "Entender o funcionamento da nossa ferramenta de trabalho é de suma importância para tirar o maior proveito e aumentar nossa produtividade, seja na hora de construir, debugar, alterar ou deletar a nossa infraestrutura com o Terraform. Nesse vídeo é mostrado como você deve ler a ajuda que o Terraform CLI nos oferece. Se você compreender esses conceitos você conseguirá resolver futuros problemas mais facilmente.\n\nLinks mencionados no vídeo:\nTerraform CLI: https://bit.ly/35K2onc\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como criar o seu primeiro script Terraform",
                "duration": "8:34",
                "thumb": "https://img.youtube.com/vi/uEpMbDnoWBI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/uEpMbDnoWBI?rel=0",
                "description": "Nesse primeiro script vamos criar um AWS S3 bucket de forma programática com o Terraform. Vamos entender o processo de criação e como é feito o deploy da infraestrutura para a AWS com os comandos básicos do Terraform.\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como acessar a AWS utilizando Terraform em um ambiente de CI/CD",
                "duration": "1:57",
                "thumb": "https://img.youtube.com/vi/l4AhkW90VQ0/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/l4AhkW90VQ0?rel=0",
                "description": "É possível se conectar à sua conta da AWS de outras formas utilizando o Terraform. Neste vídeo eu mostro como podemos fazer isso de uma forma totalmente insegura e usando variáveis de ambiente, para pipelines de CI/CD.\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como alterar e destruir sua infra na AWS com Terraform",
                "duration": "6:38",
                "thumb": "https://img.youtube.com/vi/lOm9OcNnjdk/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/lOm9OcNnjdk?rel=0",
                "description": "Agora que já sabemos como construir nossa infraestrutura, vamos aprender a alterar e em seguida destruir os recursos criados na AWS com o Terraform. \n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Variáveis no Terraform, tudo que você precisa saber",
                "duration": "16:20",
                "thumb": "https://img.youtube.com/vi/55S4D9c5T2k/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/55S4D9c5T2k?rel=0",
                "description": "À esta altura já conhecemos os comandos básicos do Terraform e está  na hora de começar a conhecer outras funcionalidades que o Terraform tem nos a ofercer para facilitar e dar mais flexibilidade para os nossos projetos na AWS.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "O que é Interpolação, Locals e Outputs no Terraform?",
                "duration": "14:36",
                "thumb": "https://img.youtube.com/vi/yP3Ak_06x6I/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/yP3Ak_06x6I?rel=0",
                "description": "À esta altura já conhecemos os comandos básicos do Terraform e está  na hora de começar a conhecer mais todas as funcionalidades que o Terraform tem nos a ofercer para facilitar dar flexibilidade para os nossos projetos na AWS.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\nTerraform aws_s3_bucket_object: https://bit.ly/3vdUYDQ\nTerraform interpolation: http://bit.ly/3vkzw05\nTerraform locals: http://bit.ly/3eFMYpz\nTerraform outputs: https://www.terraform.io/docs/language/values/outputs.html\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Terraform tfstate, o que é exatamente?",
                "duration": "6:52",
                "thumb": "https://img.youtube.com/vi/q1H6BMX9FnM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/q1H6BMX9FnM?rel=0",
                "description": "Ter um entedimento deste arquivo especial do Teraform é fundamental para entender as engrenagens por trás da ferramenta e como o Terraform faz para manter o track dos recursos da AWS. Com o arquivo tfstate o Terraform sabe extamente o que e quando criar, alterar ou destruir qualquer recurso da nossa infraestrutura.\n\nNeste vídeo é mostrado os comandos:\n- terraform plan\n- terraform apply\n- terraform destroy\n- terraform show\n- terraform console\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\nTerraform aws_s3_bucket_object: https://bit.ly/3vdUYDQ\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como usar o terraform import",
                "duration": "7:11",
                "thumb": "https://img.youtube.com/vi/x5P_wnrUq6o/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/x5P_wnrUq6o?rel=0",
                "description": "Nem sempre teremos a oportunidade de criar os recursos diretamente com o Terraform e é muito importante saber como e quando importar algum recurso existenta na AWSM que não está sendo gerenciado pelo Terraform. Neste vídeo eu mostro como é feito a importação de um AWS S3 bucket para fazer parte do state do nosso Terraform.\n\nNeste vídeo é mostrado os comandos:\n- terraform import\n- terraform init\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\nTerraform aws_s3_bucket_object: https://bit.ly/3vdUYDQ\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Terraform Remote State utilizando um S3 bucket",
                "duration": "12:56",
                "thumb": "https://img.youtube.com/vi/QHfI3NRedIg/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/QHfI3NRedIg?rel=0",
                "description": "Agora que os tópicos básicos já foram cobertos vamos nos aprofundar um pouco mais em alguns assuntos que considero já sendo intermediários. A partir daqui você vai pode entender como é feita a colaboração entre times e pessoas seguindo as melhores práticas para evitar conflitos perca de dados.\nCom o Terraform Remote State você será capaz de manter o seu arquivo tfstate na nuvem para poder compartilhar e colaborar com outros membros ou ferramentas. Você verá que é possível mover um arquivo tfstat local para o remote sem problemas.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\nTerraform aws_s3_bucket_object: https://bit.ly/3vdUYDQ\nTerraform aws_instance: https://bit.ly/2Otu1LN\nTerraform remote state: http://bit.ly/2NeHqa9\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Terraform Built-in Functions e Data Templates",
                "duration": "15:30",
                "thumb": "https://img.youtube.com/vi/dmIrPSBHSwc/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/dmIrPSBHSwc?rel=0",
                "description": "O Terraform contém uma série de funções que já vem por padrão para ajudar e facilitar a nossa vida na hora de escrever o código da nossa infra. Também é ensinado como utilizar templates para gerenciar strings complexas sem \"sujar\" muito o padrão de código do Terraform.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\nTerraform aws_s3_bucket_object: https://bit.ly/3vdUYDQ\nTerraform aws_instance: https://bit.ly/2Otu1LN\nTerraform remote state: http://bit.ly/2NeHqa9\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Terraform Data Sources",
                "duration": "13:44",
                "thumb": "https://img.youtube.com/vi/4DSeY8Zwo5Y/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/4DSeY8Zwo5Y?rel=0",
                "description": "O Data Sources serve para você computar e pegar informações externas utilizando o Terraform. \nNeste vídeo eu mostro como é feito o compartilhamento de certas configurações usando um remote state em um S3 bucket como fonte de dados e como computar uma AWS AMI utilizando determinados filtros.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform validate\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\nTerraform aws_s3_bucket_object: https://bit.ly/3vdUYDQ\nTerraform aws_instance: https://bit.ly/2Otu1LN\nTerraform remote state: http://bit.ly/2NeHqa9\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Terraform for_each, for e splat operator",
                "duration": "19:50",
                "thumb": "https://img.youtube.com/vi/kP_iNtFIOM8/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/kP_iNtFIOM8?rel=0",
                "description": "Aprenda a manipular dados e recursos com essas três importante ferramentas que o Terraform dispõe. \n\nSão elas: \nfor_each: para criar recursos semelhantes sem duplicar o bloco\nfor: para gerar dados complexos\nsplat: atalho para um for mais comum\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform validate\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\nTerraform aws_s3_bucket: https://bit.ly/3cs1IFB\nTerraform aws_s3_bucket_object: https://bit.ly/3vdUYDQ\nTerraform aws_instance: https://bit.ly/2Otu1LN\nTerraform remote state: http://bit.ly/2NeHqa9\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria- - Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como criar Terraform Modules",
                "duration": "29:55",
                "thumb": "https://img.youtube.com/vi/WDOUmcnipxw/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/WDOUmcnipxw?rel=0",
                "description": "Terraform Modules é umas das funcionalidades mais legais e poderosas do Terraform. Com módulos podemos abstrair muitas partes da nossa infraestrutura que se repetem e torná-las flexíveis e reutilizáveis.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform validate\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Como trabalhar com Terraform Workspaces",
                "duration": "15:02",
                "thumb": "https://img.youtube.com/vi/e7yk5aY9evo/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/e7yk5aY9evo?rel=0",
                "description": "Com Terraform Workspaces é possível criar diferentes states utilizando o mesmo backend, dando a possibilidade de deployar recursos iguais ou similiares na mesma região ou em regiões diferentes sem que haja conflitos entre eles. É muito útil quando você só tem uma conta na AWS e gostaria de criar diferentes ambientes sem que um afete o outro.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform validate\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Terraform null_resource e provisioners",
                "duration": "5:23",
                "thumb": "https://img.youtube.com/vi/CpMzK9WpeIM/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/CpMzK9WpeIM?rel=0",
                "description": "E na nossa última parte do curso, vamos demonstrar como utilizar o null_resource e o provisioner local-exec. Juntos eles formam uma dupla para contornar algumas situações em que o Terraform não consegue fazer nativamente.\n\nNeste vídeo é mostrado os comandos:\n- terraform init\n- terraform validate\n- terraform plan\n- terraform apply\n- terraform destroy\n\nLinks mencionados no vídeo:\n\nCurso completo gratuito de Terraform:\nPlaylist do curso: https://bit.ly/3t3iDFk\nCódigo fonte: https://bit.ly/3EfHCf0\n\nCurso pago com exemplos do mundo real:\n- Gumroad: https://bit.ly/3gvOL0x - Preço cheio. Curso atualizado com novos módulos. Possibilidade de mentoria\n- Udemy: https://bit.ly/2JuJmJn - Os maiores descontos. Sem atualizações futuras. Sem mentoria\n- Workover: https://bit.ly/2YzfSBt - Desconto considerável. Possibilidade de mentoria. Sem atualizações futuras\n\nSite/Blog: https://bit.ly/3tdDUvU\nTwitter: https://bit.ly/2OSIZe4\nLinkedin: https://bit.ly/3zfuDag"
            },
            {
                "title": "Automatize seus testes de infraestrutura com o Terraform Test",
                "duration": "16:33",
                "thumb": "https://img.youtube.com/vi/mFTq8nL5ngo/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/mFTq8nL5ngo?rel=0",
                "description": "Curso completo de Terraform 1.6: https://bit.ly/4bj6aUK\n\nNeste tutorial abrangente, você aprenderá como rodar testes de infraestrutura de forma eficiente com a nova ferramenta de testes do Terraform. Vamos abordar passo a passo como automatizar seus testes e melhorar a qualidade da sua infraestrutura. Não perca a chance de otimizar seu fluxo de trabalho com o Terraform Test!\n\nTópicos abordados no vídeo:\n- Configuração do ambiente de teste no Terraform.\n- Escrevendo testes para validar sua infraestrutura.\n- Execução e interpretação de resultados.\n- Dicas e melhores práticas.\n\nSe você quer economizar tempo e melhorar a confiabilidade da sua infraestrutura, este vídeo é para você! Não se esqueça de se inscrever, dar um like e compartilhar. Deixe seus comentários com dúvidas ou sugestões.\n\nRecursos adicionais:\n- https://github.com/chgasparoto/youtube-cleber-gasparoto/tree/main/0013-terraform-test\n- https://www.hashicorp.com/blog/terraform-1-6-adds-a-test-framework-for-enhanced-code-validation\n- https://developer.hashicorp.com/terraform/language/tests\n- https://developer.hashicorp.com/terraform/cli/test\n- https://developer.hashicorp.com/terraform/tutorials/configuration-language/test\n- http://terraform-test-intro-09877890.s3-website.eu-central-1.amazonaws.com/index.html\n\nSiga-me no Twitter: https://twitter.com/clebergasparoto\nVisite meu site: https://clebergasparoto.com"
            },
            {
                "title": "Simplificando a importação de recursos no Terraform: A revolução do Terraform Import Block",
                "duration": "12:31",
                "thumb": "https://img.youtube.com/vi/jDJLHCubkNI/hqdefault.jpg",
                "video": "https://www.youtube.com/embed/jDJLHCubkNI?rel=0",
                "description": "Curso completo de Terraform 1.6: https://bit.ly/4bj6aUK\n\nO poderoso Terraform Import Block! Se você já se perguntou como importar recursos de provedores em sua infraestrutura Terraform com facilidade, este vídeo é para você.\n\nNeste vídeo, vamos cobrir:\n- Uma visão geral do Terraform Import Block e como ele simplifica o processo de importação de recursos.\n- Passo a passo, mostraremos como importar e gerenciar diferentes recursos, tudo diretamente no seu código de configuração Terraform.\n- Como o Terraform Import Block gera automaticamente o código para vincular recursos ao seu `tfstate`, economizando tempo e esforço.\n- Dicas e melhores práticas para tirar o máximo proveito desse recurso incrível.\n\nAssista e aprenda como simplificar suas operações de infraestrutura com o Terraform Import Block. Se você é um entusiasta do Terraform ou um profissional experiente, este vídeo oferecerá insights valiosos.\n\nSe gostar do conteúdo, não se esqueça de se inscrever, dar um like e compartilhar com seus colegas. Deixe seus comentários com dúvidas ou sugestões.\n\nRecursos adicionais:\n- https://github.com/chgasparoto/youtube-cleber-gasparoto/tree/main/0014-terraform-import\n- https://developer.hashicorp.com/terraform/language/import\n- https://developer.hashicorp.com/terraform/language/import/generating-configuration\n\nSiga-me no Twitter: https://twitter.com/clebergasparoto\nVisite meu site: https://clebergasparoto.com"
            }
        ]
    }
]
