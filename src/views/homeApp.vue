<template>
<div class="contener">
    <TestApiSms /> 
  <PictureOfTheDays />
</div>
  
</template>

<script>
import TestApiSms from '../components/test-api-sms.vue'
import PictureOfTheDays from '@/components/picture-of-the-days.vue';
export default {
    name: 'HomeApp',
    components: TestApiSms, PictureOfTheDays
}
</script>

<style>

</style>