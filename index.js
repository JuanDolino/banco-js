let valor = 9000;

const notas = [100, 50, 20, 10];

let mensagem = "";

let qntdNotas;

notas.map((nota) => {
  for (qntdNotas = 0; nota <= valor; qntdNotas++) {
    if (nota <= valor) {
      valor -= nota;
    }
  }
  if (valor === 0 && qntdNotas > 0) {
    mensagem += ` e ${qntdNotas} notas de ${nota}.`;
  } else if (qntdNotas > 0) {
    mensagem += ` ${qntdNotas} notas de ${nota},`;
  }
});

console.log(`Foram recebidas${mensagem}`);
