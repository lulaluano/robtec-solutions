export default (req, res) => {
    res.status(200).json(
        {
            "home": {
                "produtos": [
                    {
                        "name": "energia-nobreak",
                        "displayText": "Energia e Nobreak"
                    },
                    {
                        "name": "armazenamento",
                        "displayText": "Armazenamento"
                    },
                    {
                        "name": "seguranca-eletronica",
                        "displayText": "Segurança Eletrônica"
                    },
                    {
                        "name": "wifi-corporativo",
                        "displayText": "Wi-fi Corporativo"
                    },
                    {
                        "name": "camera-veicular",
                        "displayText": "Câmera Veicular"
                    },
                    {
                        "name": "energia-solar",
                        "displayText": "Energia Solar"
                    },
                    {
                        "name": "gateways",
                        "displayText": "Gateways"
                    },
                    {
                        "name": "conferencias",
                        "displayText": "Conferência"
                    },
                    {
                        "name": "telefone-ip",
                        "displayText": "Telefones IP"
                    },
                    {
                        "name": "radiocomunicacao",
                        "displayText": "Radiocomunicação"
                    },
                    {
                        "name": "detector-gases",
                        "displayText": "Detector de Gases"
                    },
                    {
                        "name": "sinalizacao-audio-visual",
                        "displayText": "Sinalização Áudio Visual"
                    }
                ]
            },
            "seguranca": {
                "produtos": [
                    {
                        "img": "central",
                        "heading": "Central de Alarme",
                        "description": "Soluções práticas, seguras e adequadas para todas as necessidades: de soluções econômicas, com as centrais não monitoradas, até integrações com empresas de segurança eletrônica e acompanhamento em tempo real via aplicativo, com as centrais monitoradas via IP."
                    },
                    {
                        "img": "cerca",
                        "heading": "Cerca Elétrica",
                        "description": "O produto ideal para proteção ostensiva de perímetros pequenos, médios ou grandes, integrado ao sistema de alarme IP é possível acompanhar em tempo real através de um aplicativo. Simples de programar e instalar para você manter o local seguro."
                    },
                    {
                        "img": "acessorios",
                        "heading": "Acessórios",
                        "description": "Tenha soluções ainda mais completas com os acessórios para alarmes Intelbras. Perfeitos para que seu projeto seja ampliado, melhorado e controlado com a tecnologia e a qualidade de seguranca pensados para otimizar ainda mais a segurança de seu patrimônio."
                    },
                    {
                        "img": "sensor",
                        "heading": "Sensor de Alarme",
                        "description": "Garanta a máxima segurança a seu patrimônio com soluções desenvolvidas para cada tipo de cenário, e tecnologias que variam de acordo com o nível de segurança e aplicação que você precisa."
                    }
                ]
            }
        }
    )
}
