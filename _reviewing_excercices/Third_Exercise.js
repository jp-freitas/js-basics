function convertTemps(temperature) {
    const celsiusExists = temperature.toUpperCase().includes('C');
    const fahreinheitExists = temperature.toUpperCase().includes('F');

    if (!celsiusExists && !fahreinheitExists) {
        throw new Error('Degree not found!');
    }

    let updatedTemperature = Number(temperature.toUpperCase().replace("F", ""));
    let calc = (fahrenheit) => ((fahrenheit - 32) * 5 / 9).toFixed(2);
    let temperatureSign = 'C';

    if (celsiusExists) {
        updatedTemperature = Number(temperature.toUpperCase().replace("C", ""));
        calc = (celsius) => (celsius * 9 / 5 + 32).toFixed(2);
        temperatureSign = 'F';
    }

    return calc(updatedTemperature) + temperatureSign;
}

try {
    console.log(convertTemps('80C'));
    console.log(convertTemps('70F'));
} catch (err) {
    console.log(err.message);
}