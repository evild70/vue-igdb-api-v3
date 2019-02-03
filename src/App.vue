<template>
  <div id="app">
      <h3>Check the console for your data.</h3>
      <hr />
      <HelloWorld />
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld';

export default {
    components: { HelloWorld },
  mounted() {
    axios({
      url: "http://localhost:[PORT_NUMBER]/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'user-key': '[API_KEY]'
      },
      data: 'fields name; limit 10;'
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.error(err);
    });

    // If you don't want to use axios (it's easier IMHO),
    // you can use the Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    // fetch('http://localhost:[PORT_NUMBER]/games', {
    //   method: 'GET',
    //   headers: {
    //     'Content-type': 'application/json',
    //     'user-key': '[API_KEY]',
    //   },
    // //   body: 'fields name; limit 10;'
    // }).then(response => {
    //     return response.json();
    // }).then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.error(err);
    // });
  }
}
</script>
