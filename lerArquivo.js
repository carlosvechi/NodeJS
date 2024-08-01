var fs = require('fs');

//Renomeando o arquivo
fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', (err) =>{
    if (err) {
        console.error('Erro ao carregar o arquivo:', err);
        return;
    }
    //Declarando o novo conteúdo
    const novoConteudo = 'Olá NodeJS! UNISENAI 2024';

    //Substituindo o conteúdo do arquivo
    fs.writeFile('ArquivoNovoRenomeado.txt', novoConteudo, (err) => {
        if (err) {
            console.error('Erro ao escrever o arquivo:', err);
            return;
        }

        console.log('Arquivo renomeado e atualizado com sucesso!');
    });
});