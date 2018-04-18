<template>
  <div class="test">
    test
    <label for="gname">Type Here:</label>
    <input type="text" id="gname" />

    <label for="gname2">Type here:</label>
    <input type="text" id="gname2">

    <label for="gname3">Select:</label>
    <select id="gname3">
      <option value=""></option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </select>

    <div id="number">
      Test
    </div>
    <br>
    <br>
    <hr>
    <br>

    <nav>
      <div class="nav nav-pills" id="pills-tab" role="tablist">
        <div v-for="base in bases">
          <a v-if="base.index === 1" class="nav-item nav-link active" :id="'pills-' + base.index + '-tab'" data-toggle="pill" :href="'#pills-' + base.index" role="tab" :aria-controls="'pills-' + base.index" aria-selected="false">{{base.title}}</a>
          <a v-else class="nav-item nav-link" :id="'pills-' + base.index + '-tab'" data-toggle="pill" :href="'#pills-' + base.index" role="tab" :aria-controls="'pills-' + base.index" aria-selected="false">{{base.title}}</a>
        </div>
      </div>
    </nav>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">Instruction</div>
      <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">Discourse</div>
      <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">Assesment</div>
      <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">Curriculum</div>
    </div>

    <br><br><br>

  </div>
</template>

<script>
import test from './list-rubric'

export default {
  name: 'test',
  data() {
    return {
      bases: test
    }
  }
}




</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#number { display: none; height: 100px; border: solid 1px #ddd; }

</style>
