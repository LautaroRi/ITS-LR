<template>

    <OHMCalculo/>

</template>
<script>
    import OHMCalculo from "@/components/OHMCalculo.vue";
    // sintaxis: import (nombre) from (ruta)
export default {
    name: 'LeyOHM',
    components:{ // En teoria todos los importados son los que voy a usar
        OHMCalculo, //Si lo declaro aca, recien me permite usarlo y renderizarlo. Si no lo coloco, no me da resultados
    }
}
</script>