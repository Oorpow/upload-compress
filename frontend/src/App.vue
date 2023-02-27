<template>
	<el-upload
		ref="upload"
		class="upload-demo"
		:action="serverUrl + '/upload'"
		:limit="1"
    :before-upload="handleCompress"
		:auto-upload="false"
    name="img"
	>
		<template #trigger>
			<el-button type="primary">select file</el-button>
		</template>
		<el-button class="ml-3" type="success" @click="submitUpload">
			upload to server
		</el-button>
		<template #tip>
			<div class="el-upload__tip text-red">
				limit 1 file, new file will cover the old file
			</div>
		</template>
	</el-upload>
</template>

<script setup>
import { ref } from 'vue'
import { compress, compressAccurately } from 'image-conversion'

const serverUrl = 'http://localhost:5005'
const upload = ref()

// 上传前进行图片压缩
const handleCompress = (rawFile) => {
  return new Promise(async (resolve, reject) => {
    let newFile = await compressAccurately(rawFile, 200)
    resolve(newFile)
  })
}

// 确认上传
const submitUpload = () => {
  upload.value.submit()
}
</script>

<style scoped></style>
