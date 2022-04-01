<template>
  <div class="ui main text container">
    <client-only>
      <quill-editor v-model="editor" :options="editorOptions" />
    </client-only>
    <ArticlesDirectory
      :articles="articlesList"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';


import ArticlesDirectory from '~/components/ArticlesDirectory';

export const uploadImage = function() {
      let fileInput = this.container.querySelector('input.ql-image[type=file]');
      if (fileInput == null) {
        fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
        fileInput.classList.add('ql-image');
        fileInput.addEventListener('change', () => {
          if (fileInput.files != null && fileInput.files[0] != null) {
            var formData = new FormData();
            formData.append("file", fileInput.files[0]);
            axios.post(`${process.env.API_SERVER_URL}/api/photos`,

      formData, {headers: {'Authorization': JSON.parse(localStorage.getItem('user'))}}
      ).then((response) => {
              let imageUrl = response.data.opt_web.url;
              console.log(imageUrl)
              // let range = this.quill.getSelection(true);
              // this.quill.updateContents(new Delta()
              //   .retain(range.index)
              //   .delete(range.length)
              //   .insert({ image: imageUrl })
              // , null);
              fileInput.value = "";
            });
          }
        });
        this.container.appendChild(fileInput);
      }
      fileInput.click();
    }

const editorOptions = {
        theme: 'snow',
        debug: 'info',
        placeholder: 'Type your post...',
        readOnly: true,
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'header': 1 }, { 'header': 2 }],
              ['blockquote', 'code-block'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }], // List
				      [{ 'indent': '-1'}, { 'indent': '+1' }],// Indent
				      [{ 'direction': 'rtl' }],
				      [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
				      [{ 'align': [] }],
				      ['clean'],
              ['link', 'image', 'video']
            ],
            handlers: { image: uploadImage }
          }
        }
      }
export default {
  components: { ArticlesDirectory },
  data() {
    return {
      editorOptions: editorOptions,
      editor: ''
    }
  },
  fetch: ({ store }) => {
    return store.dispatch('getArticles');
  },
  computed: {
    ...mapGetters(['articlesList'])
  },
  methods: {

  }
}
</script>
