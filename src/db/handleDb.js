/*import SQlite from 'react-native-sqlite-storage'

const db = SQlite.openDatabase(
    {
        name: 'anamneseInorte.db',
        location: '../db'
    },
    () => {
        console.log('Banco aberto com sucesso!')
    },
    (error) => {
        console.log('Erro ao abrir o banco', error)
    }
)

export default db


 * codigo para criar a tabela e subir os dados
 * 
 * const criarTabela = (dados) => {
         const keys = Object.keys(dados)
         const campos = keys.map((key)=>`${key} TEXT`).join(', ')
 
         db.transaction((tx)=>{
             tx.executeSql(
                 `CREATE TABLE IF NOT EXISTS anamnese (${campos})`,
                 [],
                 ()=> console.log('Tabela criada com sucesso!'),
                 (error)=> console.log('Erro ao criar tabela:', error)
             )
         })
     }
 
     const inserirDados = (dados) => {
         const keys = Object.keys(dados).join(', ')
         const values = Object.values(dados)
         const placeholders = keys.split(', ').map(()=>'?').join(', ')
 
         db.transaction((tx)=>{
             tx.executeSql(
                 `INSERT INTO anamnese (${keys}) VALUES (${placeholders})`,
                 values,
                 ()=>{
                     console.log('Dados inseridos com sucesso!')
                 }, 
                 (error) => {
                     console.log('Erro ao inserir dados:', error)
                 }
             )
         })
     }
 */