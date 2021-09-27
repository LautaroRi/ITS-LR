<template>

    <ClienteForm></ClienteForm>
    
</template>


<script>
import ClienteForm from "@/components/ClienteForm.vue"; //Me traigo el componente para darle un uso
export default {
    name: "Cliente",
    components:{
        ClienteForm
    }
}
</script>