process.stdout.write('Está gostando do cruso? ');
process.stdin.on('data', function(data) {
    process.stdout.write(`Sua resposta foi ${data.toString()}Obrigado!\n`);
    process.exit();
});