import request from '@/common/request'
import { IP, PAGE_LIMIT } from '@/common/constants'


export function fetchSupplierList({ page, supp_name }) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_LIMIT)
  formData.append('supp_name', supp_name)
  return request(`${IP}/index/supp/page`, {
    method: 'POST',
    body: formData,
  })
}

export function insertSupplier(form) {
  let formData = new FormData()
  Object.keys(form).forEach((key, i) => {
    formData.append(key, form[key] || '')
  })
  return request(`${IP}/index/supp/add`, {
    method: 'POST',
    body: formData,
  })
}

export function updateSupplierInfo(form) {
  let formData = new FormData()
  Object.keys(form).forEach((key, i) => {
    formData.append(key, form[key] || '')
  })
  return request(`${IP}/index/supp/update`, {
    method: 'POST',
    body: formData,
  })
}

export function updateSupplierContact(form) {
  let formData = new FormData()
  Object.keys(form).forEach((key, i) => {
    formData.append(key, form[key] || '')
  })
  return request(`${IP}/index/supp/update-contact`, {
    method: 'POST',
    body: formData,
  })
}


export function getSupplierInfoById(id) {
  let formData = new FormData()
  formData.append('id', id)
  return request(`${IP}/index/supp/info`, {
    method: 'POST',
    body: formData,
  })
}

export function setSupplierFinance(form) {
  let formData = new FormData()
  Object.keys(form).forEach((key, i) => {
    formData.append(key, form[key] || '')
  })
  return request(`${IP}/index/supp/set-finance`, {
    method: 'POST',
    body: formData,
  })
}

export function fetchGasSourceList({ page, supp_id, goods_name }) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_LIMIT)
  formData.append('supp_id', supp_id)
  formData.append('goods_name', goods_name)
  return request(`${IP}/index/goods/page`, {
    method: 'POST',
    body: formData,
  })
}

export function insertGasSource(form) {
  let formData = new FormData()
  Object.keys(form).forEach((key, i) => {
    formData.append(key, form[key] || '')
  })
  return request(`${IP}/index/goods/add`, {
    method: 'POST',
    body: formData,
  })
}

export function updateGasSourceInfo(form) {
  let formData = new FormData()
  Object.keys(form).forEach((key, i) => {
    formData.append(key, form[key] || '')
  })
  return request(`${IP}/index/goods/update`, {
    method: 'POST',
    body: formData,
  })
}

export function inquireGasSourceInfoById(id) {
  let formData = new FormData()
  formData.append('id', id)
  return request(`${IP}/index/goods/info`, {
    method: 'POST',
    body: formData,
  })
}

export function deleteGasSource(id) {
  let formData = new FormData()
  formData.append('id', id)
  return request(`${IP}/index/goods/delete`, {
    method: 'POST',
    body: formData,
  })
}

export function upLoadExcel(file) {
  let formData = new FormData()
  formData.append(file.filename, file.file)
  return request(file.action, {
    method: 'POST',
    body: formData,
  })
}

export function postReport({ file, id }) {
  let formData = new FormData()
  formData.append(file.filename, file.file)
  formData.append('id', id)
  return request(file.action, {
    method: 'POST',
    body: formData,
  })
}


export function fetchSalesHistoryList({ page, supplier_id }) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_LIMIT)
  formData.append('supplier_id', supplier_id)
  return request(`${IP}/index/supp/order-page`, {
    method: 'POST',
    body: formData,
  })
}
