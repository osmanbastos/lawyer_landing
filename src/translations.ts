interface Translation {
    nav: {
      services: string;
      about: string;
      testimonials: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      buttons: {
        consultation: string;
        learnMore: string;
      };
    };
    stats: {
      casesWon: string;
      experience: string;
      satisfaction: string;
    };
    services: {
      title: string;
      corporate: {
        title: string;
        description: string;
      };
      civil: {
        title: string;
        description: string;
      };
      realEstate: {
        title: string;
        description: string;
      };
      international: {
        title: string;
        description: string;
      };
      learnMore: string;
    };
    about: {
      title: string;
      description: string;
      credentials: string[];
    };
    testimonials: {
      title: string;
      items: Array<{
        text: string;
        author: string;
        position: string;
      }>;
    };
    contact: {
      title: string;
      form: {
        name: string;
        email: string;
        message: string;
        send: string;
      };
    };
    footer: {
      rights: string;
    };
  }
  
  export const translations: Record<string, Translation> = {
    en: {
        nav: {
            services: "Services",
            about: "About",
            testimonials: "Testimonials",
            contact: "Contact"
        },
        hero: {
            title: "Defending Your Rights with Excellence and Integrity",
            subtitle: "Specialized legal representation tailored to your needs. We fight for justice, protecting your interests every step of the way.",
            buttons: {
            consultation: "Schedule a Consultation",
            learnMore: "Learn More"
            }
        },
        stats: {
            casesWon: "Cases Won",
            experience: "Years of Experience",
            satisfaction: "Client Satisfaction"
        },
        services: {
            title: "Our Areas of Practice",
            realEstate: {
            title: "Electoral Law",
            description: "Providing technical support for proposed bills, advising candidates and political parties"
            },
            civil: {
            title: "Legal Consulting",
            description: "Conflict mediation, compliance, and expertise in data protection and GDPR"
            },
            corporate: {
            title: "Corporate Law",
            description: "Comprehensive legal solutions tailored to your specific needs."
            },
            international: {
              title: "International and Migration Law",
              description: "Legal assistance for immigration, citizenship, and human rights issues"
            },
            learnMore: "Learn More"
        },
        about: {
            title: "About Olímpio Mello",
            description: "With approximately 10 years of experience in political and electoral law, Olímpio Mello has established himself as a trusted legal advisor for candidates, companies, and individuals.",
            credentials: [
            "Graduated from Maurício de Nassau Law School",
            "Certified Specialist in Electoral Law",
            "Member of the Brazilian Bar Association",
            "Member of the Portuguese Bar Association",
            "Judicial Arbitrator certified by CONAJA (National Council of Arbitral Justice)",
            "Conflict Mediator recognized by the CNJ - National Council of Justice"
            ]
        },
        testimonials: {
            title: "Client Testimonials",
            items: [
            {
                text: "Olímpio's expertise and dedication to our case were exceptional. Highly recommended!",
                author: "Sarah Johnson",
                position: "CEO, Tech Solutions Inc."
            },
            {
                text: "Professional, knowledgeable, and always available when we needed guidance.",
                author: "Michael Chen",
                position: "Real Estate Developer"
            },
            {
                text: "The best legal representation I could have asked for. Outstanding results!",
                author: "Emily Rodriguez",
                position: "Small Business Owner"
            }
            ]
        },
        contact: {
            title: "Get in Touch",
            form: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            send: "Send Message"
            }
        },
        footer: {
            rights: "© 2025 Olímpio Mello. All rights reserved."
        }
    },
    br: {
        nav: {
            services: "Serviços",
            about: "Sobre",
            testimonials: "Depoimentos",
            contact: "Contato",
        },
        hero: {
            title: "Defendendo Seus Direitos com Excelência e Integridade", 
            subtitle: "Representação jurídica especializada adaptada às suas necessidades. Lutamos pela justiça, protegendo seus interesses em cada etapa.",
            buttons: {
            consultation: "Agendar Consulta",
            learnMore: "Saiba Mais",
            },
        },
        stats: {
            casesWon: "Casos Ganhos",
            experience: "Anos de Experiência",
            satisfaction: "Satisfação dos Clientes",
        },
        services: {
            title: "Nossas Áreas de Atuação",
            realEstate: {
            title: "Direito Eleitoral", 
            description: "Respaldar tecnicamente os projetos de lei propostos, acessorar candidaturas e partidos", 
            },
            civil: {
            title: "Consultoria Jurídica", 
            description: "Mediação de conflitos, Compliance e expertise na área de proteção de dados e LGPD", 
            },
            corporate: {
            title: "Direito Empresarial", 
            description: "Soluções jurídicas abrangentes adaptadas às suas necessidades específicas.",
            },
            international: {
              title: "Direito Internacional e Migratório",
              description: "Assistência jurídica para questões de imigração, cidadania e direitos humanos"
            },
            learnMore: "Saiba Mais",
        },
        about: {
            title: "Sobre Olímpio Mello",
            description: "Com aproximadamente 10 anos de experiência em direito político e eleitoral, Olímpio Mello se estabeleceu como um consultor jurídico de confiança para candidatos, empresas e indivíduos.", 
            credentials: [
            "Graduado pela Faculdade de Direito Maurício de Nassau", 
            "Especialista Certificado em Direito Eleitoral", 
            "Membro da Ordem dos Advogados do Brasil", 
            "Membro da Ordem dos Advogados de Portugal",
            "Árbitro Judicial certificado pelo CONAJA (Conselho Nacional de Justiça Arbitral)",
            "Mediador de Conflitos reconhecido pelo CNJ - Conselho Nacional de Justiça",
            ],
        },
        testimonials: {
            title: "Depoimentos de Clientes",
            items: [
            {
                text: "A expertise e dedicação de Olímpio ao nosso caso foi excepcional. Altamente recomendado!", 
                author: "Sarah Johnson",
                position: "CEO, Tech Solutions Inc.",
            },
            {
                text: "Profissional, conhecedor e sempre disponível quando precisávamos de orientação.",
                author: "Michael Chen",
                position: "Incorporador Imobiliário",
            },
            {
                text: "A melhor representação jurídica que eu poderia ter pedido. Resultados excepcionais!",
                author: "Emily Rodriguez",
                position: "Proprietária de Pequena Empresa",
            },
            ],
        },
        contact: {
            title: "Entre em Contato",
            form: {
            name: "Seu Nome",
            email: "Seu Email",
            message: "Sua Mensagem",
            send: "Enviar Mensagem",
            },
        },
        footer: {
            rights: "© 2025 Olímpio Mello. Todos os direitos reservados.",
        },
    },
    pt: { 
        nav: {
          services: "Serviços",
          about: "Sobre",
          testimonials: "Testemunhos",
          contact: "Contacto"
        },
        hero: {
          title: "Defendendo os Seus Direitos com Excelência e Integridade",
          subtitle: "Representação jurídica especializada adaptada às suas necessidades. Lutamos pela justiça, protegendo os seus interesses em cada etapa.",
          buttons: {
            consultation: "Marcar Consulta",
            learnMore: "Saber Mais"
          }
        },
        stats: {
          casesWon: "Casos Ganhos",
          experience: "Anos de Experiência",
          satisfaction: "Satisfação dos Clientes"
        },
        services: {
          title: "As Nossas Áreas de Atuação",
          realEstate: {
            title: "Direito Eleitoral",
            description: "Apoiar tecnicamente os projetos de lei propostos, assessorar candidaturas e partidos"
          },
          civil: {
            title: "Consultoria Jurídica",
            description: "Mediação de conflitos, compliance e especialização na área de proteção de dados e RGPD"
          },
          corporate: {
            title: "Direito Empresarial",
            description: "Soluções jurídicas abrangentes adaptadas às suas necessidades específicas."
          },
          international: {
            title: "Direito Internacional e das Migrações",
            description: "Assistência jurídica para questões de imigração, cidadania e direitos humanos"
          },
          learnMore: "Saber Mais"
        },
        about: {
          title: "Sobre o Olímpio Mello",
          description: "Com aproximadamente 10 anos de experiência em direito político e eleitoral, o Olímpio Mello estabeleceu-se como um consultor jurídico de confiança para candidatos, empresas e particulares.",
          credentials: [
            "Licenciado em Direito pela Faculdade de Direito Maurício de Nassau",
            "Especialista Certificado em Direito Eleitoral",
            "Membro da Ordem dos Advogados do Brasil",
            "Membro da Ordem dos Advogados de Portugal",
            "Árbitro Judicial certificado pelo CONAJA (Conselho Nacional de Justiça Arbitral)",
            "Mediador de Conflitos reconhecido pelo CNJ - Conselho Nacional de Justiça"
          ]
        },
        testimonials: {
          title: "Testemunhos de Clientes",
          items: [
            {
              text: "A experiência e dedicação do Olímpio ao nosso caso foram excecionais. Altamente recomendado!",
              author: "Sarah Johnson",
              position: "CEO, Tech Solutions Inc."
            },
            {
              text: "Profissional, conhecedor e sempre disponível quando precisávamos de orientação.",
              author: "Michael Chen",
              position: "Promotor Imobiliário"
            },
            {
              text: "A melhor representação jurídica que poderia ter pedido. Resultados excecionais!",
              author: "Emily Rodriguez",
              position: "Proprietária de Pequena Empresa"
            }
          ]
        },
        contact: {
          title: "Entre em Contacto",
          form: {
            name: "O Seu Nome",
            email: "O Seu Email",
            message: "A Sua Mensagem",
            send: "Enviar Mensagem"
          }
        },
        footer: {
          rights: "© 2025 Olímpio Mello. Todos os direitos reservados."
        }
    },
    de: { 
        nav: {
          services: "Dienstleistungen",
          about: "Über uns",
          testimonials: "Kundenbewertungen",
          contact: "Kontakt"
        },
        hero: {
          title: "Verteidigung Ihrer Rechte mit Exzellenz und Integrität",
          subtitle: "Spezialisierte rechtliche Vertretung, die auf Ihre Bedürfnisse zugeschnitten ist. Wir kämpfen für Gerechtigkeit und schützen Ihre Interessen in jeder Phase.",
          buttons: {
            consultation: "Beratung vereinbaren",
            learnMore: "Mehr erfahren"
          }
        },
        stats: {
          casesWon: "Gewonnene Fälle",
          experience: "Jahre der Erfahrung",
          satisfaction: "Kundenzufriedenheit"
        },
        services: {
          title: "Unsere Tätigkeitsbereiche",
          realEstate: {
            title: "Wahlrecht",
            description: "Technische Unterstützung für Gesetzesvorschläge, Beratung von Kandidaten und Parteien"
          },
          civil: {
            title: "Rechtsberatung",
            description: "Konfliktmediation, Compliance und Expertise im Bereich Datenschutz und DSGVO"
          },
          corporate: {
            title: "Unternehmensrecht",
            description: "Umfassende rechtliche Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind."
          },
          international: {
            title: "Internationales und Migrationsrecht",
            description: "Rechtliche Unterstützung bei Einwanderungs-, Staatsbürgerschafts- und Menschenrechtsfragen"
          },
          learnMore: "Mehr erfahren"
        },
        about: {
          title: "Über Olímpio Mello",
          description: "Mit rund 10 Jahren Erfahrung im politischen und Wahlrecht hat sich Olímpio Mello als vertrauenswürdiger Rechtsberater für Kandidaten, Unternehmen und Privatpersonen etabliert.",
          credentials: [
            "Abschluss in Rechtswissenschaften an der Fakultät für Recht Maurício de Nassau",
            "Zertifizierter Spezialist für Wahlrecht",
            "Mitglied der brasilianischen Anwaltskammer",
            "Mitglied der portugiesischen Anwaltskammer",
            "Gerichtsschiedsrichter, zertifiziert vom CONAJA (Nationaler Rat für Schiedsjustiz)",
            "Konfliktvermittler, anerkannt vom CNJ - Nationaler Justizrat",
          ]
        },
        testimonials: {
          title: "Kundenbewertungen",
          items: [
            {
              text: "Olímpios Fachwissen und Engagement für unseren Fall waren außergewöhnlich. Sehr zu empfehlen!",
              author: "Sarah Johnson",
              position: "CEO, Tech Solutions Inc."
            },
            {
              text: "Professionell, sachkundig und immer verfügbar, wenn wir Beratung brauchten.",
              author: "Michael Chen",
              position: "Immobilienentwickler"
            },
            {
              text: "Die beste rechtliche Vertretung, die ich mir wünschen konnte. Hervorragende Ergebnisse!",
              author: "Emily Rodriguez",
              position: "Kleinunternehmerin"
            }
          ]
        },
        contact: {
          title: "Kontaktieren Sie uns",
          form: {
            name: "Ihr Name",
            email: "Ihre E-Mail",
            message: "Ihre Nachricht",
            send: "Nachricht senden"
          }
        },
        footer: {
          rights: "© 2025 Olímpio Mello. Alle Rechte vorbehalten."
        }
    }
};      