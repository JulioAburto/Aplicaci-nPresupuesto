const ingresos = [new Ingreso("Salario", 2100), new Ingreso("Pago", 1500)];
const egresos = [new egreso("Renta", 9878), new egreso("Ropa", 344)];

let cargarApp = () => {
	cargarCabecero();
};
let totalIngresos = () => {
    let totalIngreso = 0;
	for (let ingreso in ingresos) {
        totalIngreso += ingreso.valor;
	}
	return totalIngreso;
};

let totalEgresos = () => {
    let totalEgreso = 0;
	for (let egreso in egresos) {
        totalEgreso += egreso.valor;
	}
	return totalEgreso;
};
let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
	return valor.toLocaleString("en-US", {
		style: "currency",
		currency: "US",
		minimumFractionDigits: 2,
	});
};
