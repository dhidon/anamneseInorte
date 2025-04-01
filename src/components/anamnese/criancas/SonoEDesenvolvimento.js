import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Dimensions } from "react-native";

import Seletor from "../../Seletor";

export default function SonoEDesenvolvimento( {setDados} ) {
    const [dados, setDadosLocal] = useState({
        formaSono: '',
        dormeSozinhoSelecionado: [0],
        quemCompartilhaCama:'',
        horarioDormir: '',
        horarioAcordar: '',
        problemaCrescimentoSelecionado: [0],
        itensSignificantesSelecionados: [0],
        comportamentos: [
            {value: 'sorrir', label: 'Sorrir', idade:''},
            {value: 'rolar', label: 'Rolar', idade: ''},
            {value: 'sentarSemApoio', label: 'Sentar sem apoio', idade:''},
            {value: 'engatinhar', label: 'Engatinhar', idade:''},
            {value: 'andarSemApoio', label: 'Andar sem apoio', idade:''},
            {value: 'correr', label: 'Correr', idade:''},
            {value: 'balbuciar', label: 'Balbuciar', idade:''},
            {value: 'silabas', label: 'Sílabas', idade:''},
            {value: 'palavras', label: 'Palavras', idade:''},
            {value: 'frasesDuasPalavras', label: 'Frases com 2 palavras', idade:''},
            {value: 'amarrarCadarcos', label: 'Amarrar os cadarços', idade:''},
            {value: 'vestirSozinho', label: 'Vestir-se sozinho', idade:''},
            {value: 'comerSozinho', label: 'Comer sozinho', idade:''},
            {value: 'controleDiurnoUrina', label: 'Controle diurno da urina', idade:''},
            {value: 'controleNoturnoUrina', label: 'Controle noturno da urina', idade:''},
            {value: 'controleFezes', label: 'Controle de fezes', idade:''},
            {value: 'andarBicicleta', label: 'Andar de bicicleta', idade:''},
        ],
        itensSignificantes: [
            {id: 'extrQuietoInativo', label: 'Extremamente quieto ou inativo', value: 'não'},
            {id: 'raramenteQuietoInativo', label: 'Raramente quieto ou inativo', value: 'não'},
            {id: 'excessInquieto', label: 'Excessivamente inquieto', value: 'não'},
            {id: 'naoColoAfago', label: 'Não gostava de colo ou afago', value: 'não'},
            {id: 'poucoAlerta', label: 'Pouco alerta', value: 'não'},
            {id: 'difAcalmar', label: 'Dificuldade para se acalmar', value: 'não'},
            {id: 'colicas', label: 'Cólicas', value: 'não'},
            {id: 'sonoExcess', label: 'Sono excessivo', value: 'não'},
            {id: 'poucoSono', label: 'Pouco Sono', value: 'não'},
            {id: 'batidasCabeca', label: 'Batidas na cabeça', value: 'não'},
            {id: 'incomodoSom', label: 'Incômodo com som', value: 'não'},
            {id: 'semNocaoPerigo', label: 'Sem noção do perigo', value: 'não'},
            {id: 'eploraTudoSempre', label: 'Explorava tudo o tempo todo', value: 'não'},
            {id: 'numeroAcidentesAcimaMedia', label: 'Excessivo número de acidentes em comparação com outras crianças', value: 'não'}
        ],
        sentouSemApoio: '',
        engatinhou: '',
        andouSemSuporte: '',
        sentouSemApoio_cg: [0],
        praticaEsportes: '',
        autoAgressao: [0],
        heteroAgressao: [0],
        idadeBalbuciou: '',
        idadeSilabas: '',
        primeirasPalavras: '',
        primeirasFrases: '',
        difDesenvolvimentoLinguagem: [0],
        atualmente: [
            {id: 1, label: 'Segura o rosto do adulto para fazê-lo olhar em determinada direção', value: 'não'},
            {id: 2, label: 'Pega na mão do adulto como se fosse uma ferramenta para alcançar algo', value: 'não'},
            {id: 3, label: 'Faz uso de gestos para se comunicar', value: 'não'},
            {id: 4, label: 'Atende quando chamada pelo nome?', value: 'não'},
            {id: 5, label: 'Apresenta dificuldade na articulação e pronúncia?', value: 'não'},
            {id: 6, label: 'Apresenta dificuldade no rítmo e entonação da voz?', value: 'não'},
            {id: 7, label: 'Repete a última palavra ou frase imediatamente ouvida?', value: 'não'},
            {id: 8, label: 'Faz confusão entre pronomes (eu, tu, eles)?', value: 'não'}
        ],
        dificuldadeCognitiva: '',
        habilidadeEspecial: '',
        difComprLinguagem: [0],
        reacaoContrariado: '',
        banhoSozinho: [0],
        escovaDentesSozinho: [0],
        limpaSozinho: [0],
        atrapalhaComHigiene: [0],
        vesteSozinho: [0],
        amarraCadarcos: [0],
        sorrisoEspontaneoFamiliares: [0],
        sorrisoEspontaneoNaoFamiliares: [0],
        sorrisoResposta: [0],
        variacaoExpressaoFacial: [0],
        exprEmocionalContexto: [0],
        compAtivPrazOutros: [0],
        ficarSozinho: [0],
        quietoTimido: [0],
        interessadoObjetos: [0],
        preocupPaisDoentesTristes: [0],
        mostraObjComp: [0],
        olhaAponta: [0],
        respBrincar: [0],
        aproxIntCriancas: [0],
        respSemIniciativa: [0],
        ansiosoPresencaCriAdol: [0],
        brincaGrupos: [0],
        ansiosoNaoConvivio: [0],
        evitaContato: [0],
        excessivaDesinibicao: [0],
        comportApego: [
            {id: 1, label: 'Demonstra preocupação quando separado dos pais', value:''},
            {id: 2, label: 'Sorri ou demonstra excitação com o retorno dos pais?', value:''},
            {id: 3, label: 'Busca a ajuda dos pais quando machucado', value:''}
        ],
        brinquedoAtividade: '',
        manipulaObjBrinquedo: [0],
        exploraBrinquedos: '',
        brincaFazDeConta: [0],
        alinhaEmpilhaObj: [0],
        brincPartesObj: [0],
        abreFechaLigaDesliga: [0],
        reageBrincInterrompida: '',
        resistenciaMudancaRotina: [0],
        sequenciaFixaAtiv: [0],
        reageInterrompida: '',
        apresentaComportamentos: [
            {id: 1, label: 'Apega-se a objetos pouco comuns para a idade (ex: pedra, plástico...) e carrega consigo cotidianamente e se desorganiza quando retirados', value: 'não'},
            {id: 2, label: 'realiza movimentos das mãos perto do rosto', value: 'não'},
            {id: 3, label: 'realiza movimentos dos deos e mãos junto ao corpo', value: 'não'},
            {id: 4, label: 'balanço do corpo', value: 'não'},
            {id: 5, label: 'realiza movimento de braços (flapping)', value: 'não'},
            {id: 6, label: 'apresenta reação exacerbada ao som, barulhos, ruídos', value: 'não'}
        ],
        medos: ''
    })

    const simOuNao = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'}
    ]

    const difAutocuidado = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'},
        {value: 'com dificuldade', label: 'Com dificuldade'}
    ]

    const difSociabilidadeAfetividade = [
        {value: 'sim', label: 'Sim'},
        {value: 'não', label: 'Não'},
        {value: 'ocasionalmente', label: 'Ocasionalmente'}
    ]

    const larguraTela = Dimensions.get('window').width
    const ehDesktop = larguraTela > 1024 && Platform.OS === 'web'

    useEffect(()=>{
        setDados(dados)
    }, [dados])

    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>SONO</Text>
            <View style={ehDesktop?styles.desktopContainer : styles.mobileContainer}>
                <View style={ehDesktop ? styles.column:null}>
                    <Text>Como é o sono (tranquilo, agitado, acorda durante a noite, chora, insônia, pesadelo...)?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.formaSono}
                        onChangeText={newText=>setDadosLocal({...dados, formaSono: newText})}
                    />
                    <Text>Dorme sozinho?</Text>
                    <Seletor
                        selecionado={dados.dormeSozinhoSelecionado}
                        aoMudar={value=>setDadosLocal({...dados, dormeSozinhoSelecionado: value})}
                        lista={simOuNao}
                    />
                </View>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Cama compartilhada com:</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.quemCompartilhaCama}
                        onChangeText={newText=>setDadosLocal({...dados, quemCompartilhaCama: newText})}
                    />
                    <Text>Dorme que horas?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.horarioDormir}
                        onChangeText={newText=>setDadosLocal({...dados, horarioDormir: newText})}
                    />
                    <Text>Acorda que horas?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.horarioAcordar}
                        onChangeText={newText=>setDadosLocal({...dados, horarioAcordar: newText})}
                    />
                </View>
            </View>
            <Text style={{fontWeight: 'bold', marginTop: 10}}>DESENVOLVIMENTO NEUROPSICOMOTOR</Text>
            <Text>Com qual idade passou a sentar sem apoio?</Text>
            <TextInput
                style={styles.input}
                value={dados.sentouSemApoio}
                onChangeText={newText=>setDadosLocal({...dados, sentouSemApoio: newText})}
            />
            <Text>Com qual idade engatinhou?</Text>
            <TextInput
                style={styles.input}
                value={dados.engatinhou}
                onChangeText={newText=>setDadosLocal({...dados, engatinhou: newText})}
            />
            <Text>Com qual idade começou a andar sem suporte</Text>
            <TextInput
                 style={styles.input}
                 value={dados.andouSemSuporte}
                 onChangeText={newText=>setDadosLocal({...dados, andouSemSuporte: newText})}
            />
            
            <Text style={{marginTop: 10, marginBottom: 5}}>Dentre os itens a seguir, pressione aqueles que estiveram presentes (com grau de significância) durante a infância nos primeiros anos de vida:</Text>
            {Array.isArray(dados.itensSignificantes) && dados.itensSignificantes.map((item, index)=> (
                <TouchableOpacity key={index} onPress={()=>{
                    const newItensSignificantes = [...dados.itensSignificantes]
                    newItensSignificantes[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, itensSignificantes: newItensSignificantes})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            ))}

            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text style={{marginTop: 10, marginBottom: 5}}>Apresenta manipulação de objetos com os dedos?</Text>
                    <Seletor
                        selecionado={dados.sentouSemApoio_cg}
                        aoMudar={value=>setDadosLocal({...dados, sentouSemApoio_cg: value})}
                        lista={simOuNao}
                    />
                    <Text>Pratica algum esporte?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.praticaEsportes}
                        onChangeText={newText=>setDadosLocal({...dados, praticaEsportes: newText})}
                    />
                    <Text>Pratica autoagressão?</Text>
                    <Seletor
                        selecionado={dados.autoAgressao}
                        aoMudar={value=>setDadosLocal({...dados, autoAgressao: value})}
                        lista={simOuNao}
                    />
                </View>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Pratica heteroagressão?</Text>
                    <Seletor
                        selecionado={dados.autoAgressao}
                        aoMudar={value=>setDadosLocal({...dados, autoAgressao: value})}
                        lista={simOuNao}
                    />
                    <Text>Pratica heteroagressão?</Text>
                    <Seletor
                        selecionado={dados.heteroAgressao}
                        aoMudar={value=>setDadosLocal({...dados, heteroAgressao: value})}
                        lista={simOuNao}
                    />
                </View>
            </View>
            <Text style={{fontWeight: 'bold'}}>Desenvolvimento da linguagem</Text>

            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Com qual idade começou a balbuciar?</Text>
                    <TextInput
                        value={dados.idadeBalbuciou}
                        onChangeText={newText=>setDadosLocal({...dados, idadeBalbuciou: newText})}
                        style={styles.input}
                    />
                    <Text>Com que idade emitiu sílabas?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.idadeSilabas}
                        onChangeText={newText=>setDadosLocal({...dados, idadeSilabas: newText})}
                    />
                </View>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Com que idade emitiu as primeiras palavras?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.primeirasPalavras}
                        onChangeText={newText=>setDadosLocal({...dados, idadeSilabas: newText})}
                    />
                    <Text>Com que idade emitiu as primeiras palavras</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.primeirasFrases}
                        onChangeText={newText=>setDadosLocal({...dados, primeirasFrases: newText})}
                    />
                </View>
            </View>
            <Text>Apresentou dificuldades no desenvolvimento da linguagem?</Text>
            <Seletor
                selecionado={dados.difDesenvolvimentoLinguagem}
                aoMudar={value=>setDadosLocal({...dados, difDesenvolvimentoLinguagem: value})}
                lista={simOuNao}
            />
            <Text>ATUALMENTE</Text>
            {Array.isArray(dados.atualmente) && dados.atualmente.map((item, index)=>{
                return <TouchableOpacity key={index} onPress={()=> {
                    const newAtualmente = [...dados.atualmente]
                    newAtualmente[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, atualmente: newAtualmente})
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1}}>
                        <Text>{item.label}</Text>
                        <Text style={{fontWight: 'bold'}}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            })}

            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text style={{marginTop: 10}}>Descreva brevemente alguma dificuldade cognitiva que seu filho apresente:</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.dificuldadeCognitiva}
                        onChangeText={newText=>setDadosLocal({...dados, dificuldadeCognitiva: newText})}
                    />
                    <Text>Descreva brevemente alguma habilidade especial que seu filho apresente:</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.habilidadeEspecial}
                        onChangeText={newText=>setDadosLocal({...dados, habilidadeEspecial: newText})}
                    />
                </View>

                <View style={ehDesktop?styles.column:null}>
                    <Text>Possui dificuldades na compreensão da linguagem?</Text>
                    <Seletor
                        selecionado={dados.difComprLinguagem}
                        aoMudar={value=>setDadosLocal({...dados, difComprLinguagem: value})}
                        lista={simOuNao}
                    />
                    <Text>Como reage quando contrariado?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.reacaoContrariado}
                        onChangeText={newText=>setDadosLocal({...dados, reacaoContrariado: newText})}
                    />
                </View>
            </View>
            <Text style={{fontWeight: 'bold', marginTop: 10}}>Autocuidado</Text>
            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Toma banho sozinho?</Text>
                    <Seletor
                        selecionado={dados.banhoSozinho}
                        aoMudar={value=>setDadosLocal({...dados, banhoSozinho: value})}
                        lista={difAutocuidado}
                    />
                    <Text>Escova os dentes sozinho?</Text>
                    <Seletor
                        selecionado={dados.escovaDentesSozinho}
                        aoMudar={value=>setDadosLocal({...dados, escovaDentesSozinho: value})}
                        lista={difAutocuidado}
                    />
                    <Text>Limpa-se sozinho?</Text>
                    <Seletor
                        selecionado={dados.limpaSozinho}
                        aoMudar={value=>setDadosLocal({...dados, limpaSozinho: value})}
                        lista={difAutocuidado}
                    />
                </View>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Ao cuidar da própria higiene, atrapalha-se com a sequência de tarefas?</Text>
                    <Seletor
                        selecionado={dados.atrapalhaComHigiene}
                        aoMudar={value=>setDadosLocal({...dados, atrapalhaComHigiene: value})}
                        lista={difAutocuidado}
                    />
                    <Text>Veste-se sozinho?</Text>
                    <Seletor
                        selecionado={dados.vesteSozinho}
                        aoMudar={value=>setDadosLocal({...dados, vesteSozinho: value})}
                        lista={difAutocuidado}
                    />
                    <Text>Amarra os cadarços sozinho?</Text>
                    <Seletor
                        selecionado={dados.amarraCadarcos}
                        aoMudar={value=>setDadosLocal({...dados, amarraCadarcos: value})}
                        lista={difAutocuidado}
                    />
                </View>
            </View>

            <Text style={{fontWeight: 'bold', marginTop: 10}}>Sociabilidade / afetividade</Text>

            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Apresenta sorriso espontâneo a pessoas familiares</Text>
                    <Seletor
                        selecionado={dados.sorrisoEspontaneoFamiliares}
                        aoMudar={value=>setDadosLocal({...dados, sorrisoEspontaneoFamiliares: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Apresenta sorriso espontâneo a pessoas não familiares</Text>
                    <Seletor
                        selecionado={dados.sorrisoEspontaneoNaoFamiliares}
                        aoMudar={value=>setDadosLocal({...dados, sorrisoEspontaneoNaoFamiliares: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Apresenta sorriso em resposta ao sorriso de outras pessoas?</Text>
                    <Seletor
                        selecionado={dados.sorrisoResposta}
                        aoMudar={value=>setDadosLocal({...dados, sorrisoResposta: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Variação na expressão facial (contentamento, frustração, surpresa, constrangimento)</Text>
                    <Seletor
                        selecionado={dados.variacaoExpressaoFacial}
                        aoMudar={value=>setDadosLocal({...dados, variacaoExpressaoFacial: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Expressão emocional apropriada ao contexto</Text>
                    <Seletor
                        selecionado={dados.exprEmocionalContexto}
                        aoMudar={value=>setDadosLocal({...dados, exprEmocionalContexto: value})}
                        lista={difSociabilidadeAfetividade}
                    />     
                </View>

                <View style={ehDesktop?styles.column:null}>
                    <Text>Compartilha atividades prazerosas com outras pessoas</Text>
                    <Seletor
                        selecionado={dados.compAtivPrazOutros}
                        aoMudar={value=>setDadosLocal({...dados, compAtivPrazOutros: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Prefere ficar sozinho</Text>
                    <Seletor
                        selecionado={dados.ficarSozinho}
                        aoMudar={value=>setDadosLocal({...dados, ficarSozinho: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Excessivamente quieto ou tímido</Text>
                    <Seletor
                        selecionado={dados.quietoTimido}
                        aoMudar={value=>setDadosLocal({...dados, quietoTimido: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Mais interessado em objetos que em pessoas</Text>
                    <Seletor
                        selecionado={dados.interessadoObjetos}
                        aoMudar={value=>setDadosLocal({...dados, interessadoObjetos: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Demonstra preocupação se os pais estão tristes/doentes/nachucados?</Text>
                    <Seletor
                        selecionado={dados.preocupPaisDoentesTristes}
                        aoMudar={value=>setDadosLocal({...dados, preocupPaisDoentesTristes: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                </View>
            </View>


            <Text style={{fontWeight: 'bold'}}>Atenção compartilhada</Text>

            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Mostra, traz pra perto do rosto do parceiro ou aponta objetos / eventos de interesse variados apenas para compartilhar?</Text>
                    <Seletor
                        lista={difSociabilidadeAfetividade}
                        selecionado={dados.mostraObjComp}
                        aoMudar={value=>setDadosLocal({...dados, mostraObjComp: value})}
                    />
                    <Text>Olha para onde o parceiro aponta</Text>
                    <Seletor
                        lista={difSociabilidadeAfetividade}
                        selecionado={dados.olhaAponta}
                        aoMudar={value=>setDadosLocal({...dados, olhaAponta: value})}
                    />
                    <Text>Responde aos convites para brincar</Text>
                    <Seletor
                        lista={difSociabilidadeAfetividade}
                        selecionado={dados.respBrincar}
                        aoMudar={value=>setDadosLocal({...dados, respBrincar: value})}
                    />
                    <Text style={{fontWeigth: 'bold'}}>Respostas / iniciativas sociais com outras crianças</Text>
                    <Text>Iniciativa de aproximação ou interesse em outras crianças</Text>
                    <Seletor
                        lista={difSociabilidadeAfetividade}
                        selecionado={dados.aproxIntCriancas}
                        aoMudar={value=>setDadosLocal({...dados, aproxIntCriancas: value})}
                    />
                    <Text>Responde mas não toma iniciativa</Text>
                    <Seletor
                        lista={difSociabilidadeAfetividade}
                        selecionado={dados.respSemIniciativa}
                        aoMudar={value=>setDadosLocal({...dados, respSemIniciativa: value})}
                    />
                </View>

                <View style={ehDesktop?styles.column:null}>
                    <Text>Fica ansioso com a presença de outras crianças / adolescentes?</Text>
                    <Seletor
                        selecionado={dados.ansiosoPresencaCriAdol}
                        aoMudar={value => setDadosLocal({...dados, ansiosoPresencaCriAdol: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Gosta de brincar com grupos</Text>
                    <Seletor
                        selecionado={dados.brincaGrupos}
                        aoMudar={value=>setDadosLocal({...dados, brincaGrupos: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Fica intensamente ansioso quando na presença de pessoas que não são do seu convívio?</Text>
                    <Seletor
                        selecionado={dados.ansiosoNaoConvivio}
                        aoMudar={value=>setDadosLocal({...dados, ansiosoNaoConvivio:value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Ignora ou evita de forma persistente esse contato?</Text>
                    <Seletor
                        selecionado={dados.evitaContato}
                        aoMudar={value=>setDadosLocal({...dados, evitaContato: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Excessiva desinibição para a idade em relação a pessoas estranhas?</Text>
                    <Seletor
                        selecionado={dados.excessivaDesinibicao}
                        aoMudar={value=>setDadosLocal({...dados, excessivaDesinibicao: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                </View>
            </View>

            <Text style={{fontWeight: 'bold'}}>Comportamento de apego</Text>
            {Array.isArray(dados.comportApego) && dados.comportApego.map((item, index)=>{
                return <View key={index}>
                    <Text>{item.label}</Text>
                    <Seletor
                        selecionado={item.value}
                        aoMudar={value=>{
                            const newComportApego = [...dados.comportApego]
                            newComportApego[index].value = value
                            setDadosLocal({...dados, comportApego: newComportApego})
                        }}
                        lista={difSociabilidadeAfetividade}
                    />
                </View>
            })}
            <Text style={{fontWeight: 'bold'}}>Brincadeira</Text>

            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Quais os brinquedos e atividades favoritas?</Text>
                    <TextInput
                        onChangeText={newText=>setDadosLocal({...dados, brinquedoAtividade: newText})}
                        value={dados.brinquedoAtividade}
                        style={styles.input}
                    />
                    <Text>Manipula vários objetos/brinquedos</Text>
                    <Seletor
                        selecionado={dados.manipulaObjBrinquedo}
                        aoMudar={value=>setDadosLocal({...dados, manipulaObjBrinquedo: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Brinca de faz de conta usando um objeto como se fosse outro?</Text>
                    <Seletor
                        selecionado={dados.brincaFazDeConta}
                        aoMudar={value=>setDadosLocal({...dados, brincaFazDeConta: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                </View>

                <View style={ehDesktop?styles.column:null}>
                    <Text>Formas de exploração dos brinquedos (ex. brinca de faz de conta; usa os objetos de forma funcional; demonstra interesse pelo cheiro ou movimento dos objetos; atividade repetitiva - alinhar, girar objetos sem função aparente):</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={newText=>setDadosLocal({...dados, exploraBrinquedos: newText})}
                        value={dados.exploraBrinquedos}
                    />
                    <Text>Brinca de faz de conta atribuindo diferentes papéis a si mesmo e aos outros (médico/enfermeira/professora)?</Text>
                    <Seletor
                        selecionado={dados.brincaPapeisOutros}
                        aoMudar={value=>setDadosLocal({...dados, brincaPapeisOutros: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                </View>
            </View>

            <Text style={{fontWeight: 'bold'}}>Comportamentos repetitivos e rituais</Text>
            <View style={ehDesktop?styles.desktopContainer:styles.mobileContainer}>
                <View style={ehDesktop?styles.column:null}>
                    <Text>Alinha, empilha objetos quando brincando sem aparente função no brenqudo?</Text>
                    <Seletor
                        selecionado={dados.alinhaEmpilhaObj}
                        aoMudar={value=>setDadosLocal({...dados, alinhaEmpilhaObj: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Faz brincadeiras com partes de objetos em vez de um objeto como um todo (ex: ignora o carrinho e gira apenas as rodas por um longo tempo)?</Text>
                    <Seletor
                        selecionado={dados.brincPartesObj}
                        aoMudar={value=>setDadosLocal({...dados, brincPartesObj: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Como reage quando a brincadeira é interrompida?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.reageBrincInterrompida}
                        onChangeText={newText=>setDadosLocal({...dados, reageBrincInterrompida: newText})}
                    />
                    <Text>Resistência a mudanças na rotina pessoal / da casa?</Text>
                    <Seletor
                        selecionado={dados.resistenciaMudancaRotina}
                        aoMudar={value=>setDadosLocal({...dados, resistenciaMudancaRotina: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                </View>

                <View style={ehDesktop?styles.column:null}>
                    <Text>Abre/fecha portas, gavetas; liga/desliga interruptores de luz; intenso interesse por objetos que giram (ex: máquina dalevar, ventilador, veículos em geral). Considerar a idade e persistência.</Text>
                    <Seletor
                        selecionado={dados.abreFechaLigaDesliga}
                        aoMudar={value=>setDadosLocal({...dados, abreFechaLigaDesliga: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Sequência fixa e rígida para atividades (ex: vestir-se, arrumar a casa, higiene pessoal)?</Text>
                    <Seletor
                        selecionado={dados.sequenciaFixaAtiv}
                        aoMudar={value=>setDadosLocal({...dados, sequenciaFixaAtiv: value})}
                        lista={difSociabilidadeAfetividade}
                    />
                    <Text>Como reage quando interrompida?</Text>
                    <TextInput
                        style={styles.input}
                        value={dados.reageInterrompida}
                        onChangeText={newText=>setDadosLocal({...dados, reageInterrompida: newText})}
                    />
                </View>
            </View>
            <Text>Apresenta os comportamentos a seguir?</Text>
            {dados.apresentaComportamentos.map((item, index)=> {
                return <TouchableOpacity key={index} onPress={()=>{
                    const newApresentaComportamentos = [...dados.apresentaComportamentos]
                    newApresentaComportamentos[index].value = item.value === 'não' ? 'sim' : 'não'
                    setDadosLocal({...dados, apresentaComportamentos: newApresentaComportamentos})
                }}>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1}}>
                                <Text>{item.label}</Text>
                                <Text style={{fontWeight:'bold'}}>{item.value}</Text>
                            </View>
                </TouchableOpacity> 
            })}
            <Text style={{marginTop: 10, marginBottom: 5}}>Medos (relacionar medos discrepantes com a etapa evolutiva-frequÊncia, intensidade, grau de interferÊncia em outras atividades da família, facilidade com que é acalmado /distraído):</Text>
            <TextInput
                style={styles.input}
                value={dados.medos}
                onChangeText={newText=>setDadosLocal({...dados, medos: newText})}
            />
        </View>
    )
}

const styles =  StyleSheet.create({
    mobileContainer: {
        marginTop: 10,
        gap: 10,
        margin: 10,
    },
    desktopContainer: {
        marginTop: 10,
        gap: 5,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        paddingLeft: 20
    },
    column: {
        flex: 1,
        marginHorizontal: 5, 
        padding: 5,
        gap: 5
    }
})