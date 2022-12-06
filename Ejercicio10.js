class Ejercicio10 {
    constructor() {
        this.url = "https://commodities-api.com/api/";
        this.apiKey = "y7m9r4zcxdnr7kvkewd5fxzdj5jh31hk0x781ekuisi93vcv912m781dnu6b";
        this.symbol = "NG";//simbolo de la api que representa el gas natural
        this.mostrado = false;
    }

    mostrar() {
        if (!this.mostrado) {
            this.recibirJSON();
            this.mostrado = true;
        }
    }

    recibirJSON(){
        this.url = "https://commodities-api.com/api/latest?access_key="+this.apiKey+"&base=EUR&symbols="+this.symbol;

        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {


                var stringDatos = "<section>";
                stringDatos += "<h2>Precio del gas natural el día "+datos.data.date+"</h2>\n";
                stringDatos += "<p>El precio es: "+1/datos.data.rates.NG+" euros "+datos.data.unit+"</p>\n"


                $(stringDatos).appendTo("main");
                // $("body").appendTo(stringDatos);
            },
            error: function () {
                $("h3").html("Â¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });

    }
}
var ej10 = new Ejercicio10();