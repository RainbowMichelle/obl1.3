new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        inputString: "",
        output: ""
    },
    methods: {
        LowerCase() 
        {
            console.log("Lower" + this.inputString);
            if (this.inputString != "")
            {
                console.log(this.inputString)
                this.output = this.inputString.toLowerCase( )
            }
        },
        UpperCase() 
        {
            console.log("Upper" + this.inputString);
            if (this.inputString != "")
            {
                console.log(this.inputString)
                this.output = this.inputString.toUpperCase( )
            }
        },
        GetSecondChar() 
        {
            console.log("SecondChar" + this.inputString);
            if (this.inputString != "")
            {
                console.log(this.inputString)
                this.output = this.inputString.charAt(1)
            }
        }
    }
})