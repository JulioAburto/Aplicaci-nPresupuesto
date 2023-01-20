const ingresos = [new Ingreso("Salario", 10010), new Ingreso("Pago", 1500)];
const egresos = [new Egreso("Renta", 9878), new Egreso("Ropa", 344)];

let cargarApp = () => {
	cargarCabecero();
};
let totalIngresos = () => {
	let totalIngreso = 0;
	for (let ingreso of ingresos) {
		totalIngreso += ingreso.valor;
	}
	return totalIngreso;
};

let totalEgresos = () => {
	let totalEgreso = 0;
	for (let egreso of egresos) {
		totalEgreso += egreso.valor;
	}
	return totalEgreso;
};
let cargarCabecero = () => {
	let presupuesto = totalIngresos() - totalEgresos();
	let porcentajeEgreso = totalEgresos() / totalIngresos();
	document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
	document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
	document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
	document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
	return valor.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});
};
const formatoPorcentaje = (valor) => {
	return valor.toLocaleString("en_US", {
		style: "percent",
		minimumFractionDigits: 2,
	});
};
