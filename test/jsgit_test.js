
require('../lib/jsgit-server')

JsGitTestData = {
  pack: [80, 65, 67, 75, 0, 0, 0, 2, 0, 0, 0, 5, 145, 12, 120, 156, 157, 204, 77, 10, 194, 48, 16, 64, 225, 125, 78, 49, 123, 65, 218, 252, 52, 9, 136, 40, 184, 244, 18, 99, 102, 130, 129, 164, 45, 233, 228, 254, 246, 12, 190, 229, 183, 120, 210, 153, 33, 89, 27, 173, 198, 232, 34, 6, 173, 209, 160, 15, 142, 201, 39, 139, 139, 11, 244, 137, 75, 156, 136, 102, 239, 20, 14, 249, 110, 29, 94, 184, 22, 174, 240, 30, 169, 99, 22, 184, 17, 174, 143, 92, 7, 175, 210, 145, 74, 194, 122, 77, 91, 187, 195, 172, 163, 177, 206, 122, 103, 224, 50, 157, 169, 83, 91, 17, 225, 255, 15, 234, 73, 4, 7, 182, 189, 50, 228, 82, 249, 80, 63, 157, 99, 59, 198, 160, 4, 120, 156, 51, 52, 48, 48, 51, 49, 81, 8, 114, 117, 116, 241, 117, 101, 248, 171, 37, 219, 177, 129, 183, 133, 241, 192, 132, 250, 195, 143, 46, 63, 138, 103, 220, 29, 244, 220, 196, 0, 8, 20, 114, 50, 147, 24, 214, 5, 138, 78, 123, 220, 119, 173, 244, 54, 27, 243, 66, 19, 63, 191, 87, 250, 146, 110, 38, 0, 237, 58, 24, 59, 181, 4, 120, 156, 11, 73, 45, 46, 81, 8, 74, 45, 200, 55, 228, 178, 133, 3, 46, 46, 175, 82, 160, 112, 162, 66, 9, 72, 182, 8, 40, 171, 144, 150, 95, 164, 80, 156, 159, 155, 90, 146, 145, 153, 151, 174, 224, 169, 158, 171, 80, 158, 95, 148, 13, 98, 231, 231, 113, 1, 0, 239, 156, 22, 95, 162, 2, 120, 156, 51, 52, 48, 48, 51, 49, 81, 72, 203, 207, 215, 203, 42, 102, 120, 186, 106, 253, 246, 114, 209, 200, 155, 183, 117, 111, 200, 7, 197, 60, 55, 232, 46, 47, 20, 0, 0, 214, 161, 13, 153, 190, 1, 120, 156, 211, 215, 87, 112, 204, 83, 72, 173, 72, 204, 45, 200, 73, 85, 240, 74, 44, 75, 12, 78, 46, 202, 44, 40, 81, 72, 203, 204, 73, 229, 2, 0, 150, 63, 10, 27, 112, 162, 38, 201, 64, 200, 237, 148, 228, 62, 53, 100, 240, 52, 119, 16, 115, 91, 161, 48, 48, 48, 54, 1, 154, 48, 48, 48, 48],
  // "
  uploadPackNAK: [48, 48, 48, 56, 78, 65, 75, 10, 48, 48, 56, 53, 2, 67, 111, 117, 110, 116, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 53, 44, 32, 100, 111, 110, 101, 46, 10, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 32, 51, 51, 37, 32, 40, 49, 47, 51, 41, 32, 32, 32, 13, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 32, 54, 54, 37, 32, 40, 50, 47, 51, 41, 32, 32, 32, 13, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 49, 48, 48, 37, 32, 40, 51, 47, 51, 41, 48, 48, 53, 54, 2, 32, 32, 32, 13, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 49, 48, 48, 37, 32, 40, 51, 47, 51, 41, 44, 32, 100, 111, 110, 101, 46, 10, 84, 111, 116, 97, 108, 32, 53, 32, 40, 100, 101, 108, 116, 97, 32, 48, 41, 44, 32, 114, 101, 117, 115, 101, 100, 32, 48, 32, 40, 100, 101, 108, 116, 97, 32, 48, 41, 10, 48, 49, 56, 55, 1, 80, 65, 67, 75, 0, 0, 0, 2, 0, 0, 0, 5, 145, 12, 120, 156, 157, 204, 77, 10, 194, 48, 16, 64, 225, 125, 78, 49, 123, 65, 218, 252, 52, 9, 136, 40, 184, 244, 18, 99, 102, 130, 129, 164, 45, 233, 228, 254, 246, 12, 190, 229, 183, 120, 210, 153, 33, 89, 27, 173, 198, 232, 34, 6, 173, 209, 160, 15, 142, 201, 39, 139, 139, 11, 244, 137, 75, 156, 136, 102, 239, 20, 14, 249, 110, 29, 94, 184, 22, 174, 240, 30, 169, 99, 22, 184, 17, 174, 143, 92, 7, 175, 210, 145, 74, 194, 122, 77, 91, 187, 195, 172, 163, 177, 206, 122, 103, 224, 50, 157, 169, 83, 91, 17, 225, 255, 15, 234, 73, 4, 7, 182, 189, 50, 228, 82, 249, 80, 63, 157, 99, 59, 198, 160, 4, 120, 156, 51, 52, 48, 48, 51, 49, 81, 8, 114, 117, 116, 241, 117, 101, 248, 171, 37, 219, 177, 129, 183, 133, 241, 192, 132, 250, 195, 143, 46, 63, 138, 103, 220, 29, 244, 220, 196, 0, 8, 20, 114, 50, 147, 24, 214, 5, 138, 78, 123, 220, 119, 173, 244, 54, 27, 243, 66, 19, 63, 191, 87, 250, 146, 110, 38, 0, 237, 58, 24, 59, 181, 4, 120, 156, 11, 73, 45, 46, 81, 8, 74, 45, 200, 55, 228, 178, 133, 3, 46, 46, 175, 82, 160, 112, 162, 66, 9, 72, 182, 8, 40, 171, 144, 150, 95, 164, 80, 156, 159, 155, 90, 146, 145, 153, 151, 174, 224, 169, 158, 171, 80, 158, 95, 148, 13, 98, 231, 231, 113, 1, 0, 239, 156, 22, 95, 162, 2, 120, 156, 51, 52, 48, 48, 51, 49, 81, 72, 203, 207, 215, 203, 42, 102, 120, 186, 106, 253, 246, 114, 209, 200, 155, 183, 117, 111, 200, 7, 197, 60, 55, 232, 46, 47, 20, 0, 0, 214, 161, 13, 153, 190, 1, 120, 156, 211, 215, 87, 112, 204, 83, 72, 173, 72, 204, 45, 200, 73, 85, 240, 74, 44, 75, 12, 78, 46, 202, 44, 40, 81, 72, 203, 204, 73, 229, 2, 0, 150, 63, 10, 27, 112, 162, 38, 201, 64, 200, 237, 148, 228, 62, 53, 100, 240, 52, 119, 16, 115, 91, 161, 48, 48, 48, 54, 1, 154, 48, 48, 48, 48],
  packBranch1: [80, 65, 67, 75, 0, 0, 0, 2, 0, 0, 0, 9, 158, 16, 120, 156, 157, 204, 77, 106, 195, 48, 16, 64, 225, 189, 78, 49, 251, 66, 176, 126, 45, 65, 41, 13, 137, 23, 133, 36, 139, 246, 4, 163, 153, 17, 54, 56, 114, 16, 242, 253, 227, 51, 244, 45, 223, 226, 235, 77, 4, 130, 117, 58, 6, 199, 36, 46, 211, 96, 98, 209, 130, 156, 204, 56, 154, 160, 115, 138, 36, 84, 2, 58, 241, 234, 133, 77, 106, 135, 108, 157, 183, 89, 226, 152, 199, 1, 7, 242, 44, 104, 34, 34, 177, 75, 84, 172, 99, 206, 73, 99, 36, 175, 112, 239, 243, 214, 224, 138, 117, 145, 21, 110, 59, 53, 44, 29, 62, 25, 235, 119, 89, 247, 131, 106, 200, 11, 225, 122, 162, 237, 249, 5, 218, 36, 155, 66, 10, 214, 195, 199, 112, 164, 142, 251, 92, 122, 151, 255, 11, 234, 204, 44, 12, 183, 159, 203, 244, 248, 155, 0, 43, 3, 66, 110, 88, 105, 134, 186, 117, 129, 190, 65, 159, 5, 126, 167, 243, 245, 62, 169, 55, 40, 16, 83, 108, 145, 12, 120, 156, 157, 204, 77, 10, 194, 48, 16, 64, 225, 125, 78, 49, 123, 65, 218, 252, 52, 9, 136, 40, 184, 244, 18, 99, 102, 130, 129, 164, 45, 233, 228, 254, 246, 12, 190, 229, 183, 120, 210, 153, 33, 89, 27, 173, 198, 232, 34, 6, 173, 209, 160, 15, 142, 201, 39, 139, 139, 11, 244, 137, 75, 156, 136, 102, 239, 20, 14, 249, 110, 29, 94, 184, 22, 174, 240, 30, 169, 99, 22, 184, 17, 174, 143, 92, 7, 175, 210, 145, 74, 194, 122, 77, 91, 187, 195, 172, 163, 177, 206, 122, 103, 224, 50, 157, 169, 83, 91, 17, 225, 255, 15, 234, 73, 4, 7, 182, 189, 50, 228, 82, 249, 80, 63, 157, 99, 59, 198, 163, 6, 120, 156, 51, 52, 48, 48, 51, 49, 81, 240, 241, 116, 118, 245, 11, 118, 101, 216, 114, 39, 124, 237, 229, 107, 167, 14, 152, 53, 29, 241, 156, 248, 169, 220, 106, 217, 137, 136, 185, 134, 16, 37, 65, 174, 142, 46, 190, 174, 12, 121, 252, 70, 151, 102, 174, 184, 127, 245, 180, 221, 102, 135, 223, 137, 255, 118, 51, 222, 40, 49, 49, 49, 0, 2, 133, 156, 204, 36, 134, 117, 129, 162, 211, 30, 247, 93, 43, 189, 205, 198, 188, 208, 196, 207, 239, 149, 190, 164, 155, 9, 0, 199, 12, 40, 45, 184, 2, 120, 156, 115, 201, 87, 40, 207, 72, 44, 81, 168, 204, 47, 85, 40, 79, 204, 43, 81, 40, 207, 44, 201, 80, 200, 44, 209, 81, 200, 203, 87, 72, 206, 207, 77, 77, 74, 76, 206, 46, 214, 227, 2, 0, 34, 62, 13, 225, 176, 8, 120, 156, 61, 140, 65, 14, 194, 48, 16, 3, 239, 251, 10, 247, 4, 28, 251, 0, 30, 0, 71, 212, 15, 164, 205, 134, 172, 32, 187, 40, 73, 213, 239, 55, 41, 82, 125, 177, 61, 150, 60, 113, 169, 120, 241, 207, 70, 186, 159, 34, 122, 174, 13, 59, 212, 190, 230, 182, 34, 88, 70, 177, 196, 53, 138, 190, 241, 184, 36, 108, 150, 63, 61, 155, 18, 77, 81, 10, 230, 236, 116, 137, 184, 254, 125, 188, 33, 186, 210, 62, 148, 55, 4, 249, 50, 156, 250, 86, 147, 121, 9, 194, 254, 96, 3, 237, 95, 111, 41, 198, 162, 2, 120, 156, 51, 52, 48, 48, 51, 49, 81, 72, 203, 207, 215, 203, 42, 102, 120, 186, 106, 253, 246, 114, 209, 200, 155, 183, 117, 111, 200, 7, 197, 60, 55, 232, 46, 47, 20, 0, 0, 214, 161, 13, 153, 190, 1, 120, 156, 211, 215, 87, 112, 204, 83, 72, 173, 72, 204, 45, 200, 73, 85, 240, 74, 44, 75, 12, 78, 46, 202, 44, 40, 81, 72, 203, 204, 73, 229, 2, 0, 150, 63, 10, 27, 160, 4, 120, 156, 51, 52, 48, 48, 51, 49, 81, 8, 114, 117, 116, 241, 117, 101, 248, 171, 37, 219, 177, 129, 183, 133, 241, 192, 132, 250, 195, 143, 46, 63, 138, 103, 220, 29, 244, 220, 196, 0, 8, 20, 114, 50, 147, 24, 214, 5, 138, 78, 123, 220, 119, 173, 244, 54, 27, 243, 66, 19, 63, 191, 87, 250, 146, 110, 38, 0, 237, 58, 24, 59, 101, 129, 15, 120, 156, 107, 96, 116, 157, 224, 10, 0, 4, 189, 1, 156, 26, 70, 154, 18, 163, 46, 170, 204, 231, 120, 99, 158, 8, 59, 156, 114, 52, 147, 42, 48, 48, 50, 98, 2, 84, 111, 116, 97, 108, 32, 57, 32, 40, 100, 101, 108, 116, 97, 32, 49, 41, 44, 32, 114, 101, 117, 115, 101, 100, 32, 48, 32, 40, 100, 101, 108, 116, 97, 32, 48, 41, 10, 48, 48, 48, 54, 1, 116, 48, 48, 48, 48],
  uploadPackACK: [48, 48, 51, 56, 65, 67, 75, 32, 57, 102, 56, 50, 55, 54, 49, 102, 56, 57, 56, 50, 100, 55, 53, 49, 48, 57, 55, 97, 57, 50, 50, 57, 51, 51, 52, 54, 55, 98, 55, 57, 56, 97, 101, 48, 49, 53, 56, 100, 32, 99, 111, 109, 109, 111, 110, 10, 48, 48, 51, 56, 65, 67, 75, 32, 98, 51, 52, 53, 51, 98, 101, 56, 55, 98, 55, 48, 97, 48, 99, 53, 100, 101, 97, 50, 56, 97, 97, 99, 100, 52, 57, 99, 102, 51, 52, 100, 100, 98, 57, 49, 97, 56, 99, 53, 32, 99, 111, 109, 109, 111, 110, 10, 48, 48, 51, 49, 65, 67, 75, 32, 98, 51, 52, 53, 51, 98, 101, 56, 55, 98, 55, 48, 97, 48, 99, 53, 100, 101, 97, 50, 56, 97, 97, 99, 100, 52, 57, 99, 102, 51, 52, 100, 100, 98, 57, 49, 97, 56, 99, 53, 10, 48, 48, 50, 48, 2, 67, 111, 117, 110, 116, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 56, 44, 32, 100, 111, 110, 101, 46, 10, 48, 48, 50, 56, 2, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 32, 49, 54, 37, 32, 40, 49, 47, 54, 41, 32, 32, 32, 13, 48, 48, 50, 56, 2, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 32, 51, 51, 37, 32, 40, 50, 47, 54, 41, 32, 32, 32, 13, 48, 48, 50, 56, 2, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 32, 53, 48, 37, 32, 40, 51, 47, 54, 41, 32, 32, 32, 13, 48, 48, 50, 56, 2, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 32, 54, 54, 37, 32, 40, 52, 47, 54, 41, 32, 32, 32, 13, 48, 48, 52, 98, 2, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 32, 56, 51, 37, 32, 40, 53, 47, 54, 41, 32, 32, 32, 13, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 49, 48, 48, 37, 32, 40, 54, 47, 54, 41, 32, 32, 32, 13, 48, 48, 50, 99, 2, 67, 111, 109, 112, 114, 101, 115, 115, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 115, 58, 32, 49, 48, 48, 37, 32, 40, 54, 47, 54, 41, 44, 32, 100, 111, 110, 101, 46, 10, 48, 48, 50, 98, 2, 84, 111, 116, 97, 108, 32, 54, 32, 40, 100, 101, 108, 116, 97, 32, 48, 41, 44, 32, 114, 101, 117, 115, 101, 100, 32, 48, 32, 40, 100, 101, 108, 116, 97, 32, 48, 41, 10, 48, 50, 56, 99, 1, 80, 65, 67, 75, 0, 0, 0, 2, 0, 0, 0, 6, 146, 15, 120, 156, 157, 204, 49, 14, 2, 33, 16, 133, 225, 158, 83, 208, 155, 24, 102, 97, 22, 72, 140, 177, 176, 212, 67, 12, 3, 40, 201, 46, 107, 144, 45, 188, 189, 120, 5, 95, 247, 191, 226, 235, 45, 37, 137, 104, 64, 59, 15, 179, 102, 206, 218, 101, 59, 138, 81, 241, 236, 129, 21, 38, 235, 85, 132, 105, 138, 32, 94, 212, 82, 237, 50, 42, 242, 9, 195, 140, 202, 130, 51, 6, 3, 106, 142, 192, 20, 140, 138, 19, 228, 240, 179, 216, 59, 18, 180, 247, 231, 214, 228, 149, 106, 73, 139, 188, 237, 220, 40, 119, 121, 138, 84, 47, 121, 217, 7, 213, 40, 22, 166, 229, 200, 219, 122, 150, 48, 121, 163, 180, 215, 214, 203, 131, 26, 19, 227, 93, 75, 239, 233, 127, 65, 220, 183, 88, 114, 249, 148, 250, 144, 43, 189, 7, 37, 190, 238, 49, 73, 163, 158, 14, 120, 156, 157, 204, 75, 10, 194, 48, 20, 70, 225, 121, 86, 145, 185, 32, 105, 147, 180, 9, 136, 40, 180, 51, 157, 184, 131, 255, 222, 220, 96, 161, 15, 9, 233, 192, 221, 219, 53, 120, 134, 103, 240, 213, 34, 162, 35, 181, 61, 89, 203, 210, 248, 192, 156, 40, 3, 182, 203, 209, 161, 247, 160, 206, 116, 66, 153, 144, 169, 85, 31, 20, 89, 171, 38, 235, 188, 37, 9, 61, 245, 6, 134, 125, 18, 180, 1, 224, 228, 34, 103, 235, 82, 162, 216, 32, 176, 87, 216, 235, 123, 43, 122, 192, 58, 201, 172, 31, 59, 23, 228, 170, 47, 9, 235, 45, 207, 251, 65, 21, 164, 137, 49, 159, 121, 91, 174, 186, 105, 163, 51, 54, 4, 223, 232, 147, 57, 82, 199, 93, 166, 90, 229, 127, 65, 61, 183, 52, 229, 175, 126, 141, 247, 225, 57, 170, 31, 46, 12, 74, 56, 160, 4, 120, 156, 51, 52, 48, 48, 51, 49, 81, 8, 114, 117, 116, 241, 117, 101, 8, 110, 239, 92, 117, 210, 208, 189, 148, 253, 113, 175, 163, 240, 247, 79, 39, 23, 53, 52, 92, 55, 49, 0, 2, 133, 156, 204, 36, 134, 117, 129, 162, 211, 30, 247, 93, 43, 189, 205, 198, 188, 208, 196, 207, 239, 149, 190, 164, 155, 9, 0, 242, 69, 24, 105, 190, 4, 120, 156, 203, 178, 172, 44, 48, 73, 44, 78, 73, 11, 73, 45, 46, 81, 8, 74, 45, 200, 55, 228, 178, 133, 3, 46, 46, 175, 82, 160, 112, 162, 66, 9, 72, 182, 8, 40, 171, 144, 150, 95, 164, 80, 156, 159, 155, 90, 146, 145, 153, 151, 174, 224, 169, 158, 171, 80, 158, 95, 148, 13, 98, 231, 231, 113, 1, 0, 232, 138, 25, 189, 160, 4, 120, 156, 51, 52, 48, 48, 51, 49, 81, 8, 114, 117, 116, 241, 117, 101, 16, 63, 155, 252, 194, 93, 186, 185, 156, 125, 119, 133, 195, 139, 106, 241, 162, 240, 89, 219, 91, 76, 12, 128, 64, 33, 39, 51, 137, 97, 93, 160, 232, 180, 199, 125, 215, 74, 111, 179, 49, 47, 52, 241, 243, 123, 165, 47, 233, 102, 2, 0, 183, 2, 22, 205, 185, 4, 120, 156, 75, 44, 78, 73, 11, 73, 45, 46, 81, 8, 74, 45, 200, 55, 228, 178, 133, 3, 46, 46, 175, 82, 160, 112, 162, 66, 9, 72, 182, 8, 40, 171, 144, 150, 95, 164, 80, 156, 159, 155, 90, 146, 145, 153, 151, 174, 224, 169, 158, 171, 80, 158, 95, 148, 13, 98, 231, 231, 113, 1, 0, 99, 80, 23, 253, 97, 199, 148, 33, 125, 102, 9, 252, 238, 218, 162, 35, 14, 172, 203, 145, 206, 129, 31, 48, 48, 48, 54, 1, 137, 48, 48, 48, 48],
}

exports['PackFileParser'] = {
  "master pack": function(test) {
    test.deepEqual(new JsGit.PackFileParser(JsGitTestData.pack).parse().getObjects(),
    [ { sha: 'b3453be87b70a0c5dea28aacd49cf34ddb91a8c5'
      , type: "commit"
      , data: 'tree c44942a959a822a3a785ed7c4a658db9690dd175\nauthor Daniel Lucraft <dan@fluentradical.com> 1293454753 +0000\ncommitter Daniel Lucraft <dan@fluentradical.com> 1293454753 +0000\n\nAdd sample files\n'
    }
    , { sha: 'c44942a959a822a3a785ed7c4a658db9690dd175'
      , type: "tree"
      , data: '100644 README\u0000\u00fd*\u001d\u0088\u00b0\r\u0084\u0001\u00c0\u0090\177\u00c3\u00e2\u00d3\u00e2_\u0001\u00bbR\u00e740000 lib\u0000\u00aeQ\u0015\u0096\u00e3\u008e\u00d6u\u00db\u0006\u0003\u00a14NN\u00ea/\u0019F4'
    }
    , { sha: 'fd2a1d88b00d8401c0907fc3e2d3e25f01bb52e7'
      , type: "blob"
      , data: 'Test Repo1\n==========\n\nJust a test repo for something I\'m working on\n'
    }
    , { sha: 'ae511596e38ed675db0603a1344e4eea2f194634'
      , type: "tree"
      , data: '100644 foo.js\u0000\u00e5\u00aa\u00af\u00b7w\u0015Y\u00d9\u00db-\u00d8\u001fR\\\u00e70\u008bwq\u0010'
    }
    , { sha: 'e5aaafb7771559d9db2dd81f525ce7308b777110'
      ,  type: "blob"
      , data: '// An example JavaScript file\n'
    }
    ])
    test.done()
  },
  "branch1 pack": function(test) {
    test.deepEqual(new JsGit.PackFileParser(JsGitTestData.packBranch1).parse().getObjects(), 
      [ { type: 'commit'
        , sha: '9f82761f8982d751097a922933467b798ae0158d'
        , data: 'tree 6341864dce4bc028f1ead9277261b98cecf6a4e5\nparent b3453be87b70a0c5dea28aacd49cf34ddb91a8c5\nauthor Daniel Lucraft <dan@fluentradical.com> 1293969635 +0000\ncommitter Daniel Lucraft <dan@fluentradical.com> 1293969635 +0000\n\nAdded LICENSE and a branch note to the README\n'
      }
      , { type: 'commit'
        , sha: 'b3453be87b70a0c5dea28aacd49cf34ddb91a8c5'
        , data: 'tree c44942a959a822a3a785ed7c4a658db9690dd175\nauthor Daniel Lucraft <dan@fluentradical.com> 1293454753 +0000\ncommitter Daniel Lucraft <dan@fluentradical.com> 1293454753 +0000\n\nAdd sample files\n'
      }
      , { type: 'tree'
        , sha: '6341864dce4bc028f1ead9277261b98cecf6a4e5'
        , data: '100644 LICENSE\u0000\u00b4\u00dcW\u00ad\u00d3\u00d6\u00ca\u00c06\u0082\u00c4I\u0091\u00f2w:\u00a6\u00c8X\u009d100644 README\u0000n\u000f2\u00d2\u0099\u00a8\u00df\u00d5\u00cb>\u00b3@\u00fba\u00fe\u00bb\u0001\u00d8t440000 lib\u0000\u00aeQ\u0015\u0096\u00e3\u008e\u00d6u\u00db\u0006\u0003\u00a14NN\u00ea/\u0019F4'
      }
      , { type: 'blob'
        , sha: 'b4dc57add3d6cac03682c44991f2773aa6c8589d'
        , data: 'Do what you want with it, no comebacks.\n'
      }
      , { type: 'blob'
        , sha: '6e0f32d299a8dfd5cb3eb340fb61febb01d87434'
        , data: 'Test Repo1\n==========\n\nJust a test repo for something I\'m working on\n\nThis branch (branch1) has a new file and a modified file!\n'
      }
      , { type: 'tree'
        , sha: 'ae511596e38ed675db0603a1344e4eea2f194634'
        , data: '100644 foo.js\u0000\u00e5\u00aa\u00af\u00b7w\u0015Y\u00d9\u00db-\u00d8\u001fR\\\u00e70\u008bwq\u0010'
      }
      , { type: 'blob'
        , sha: 'e5aaafb7771559d9db2dd81f525ce7308b777110'
        , data: '// An example JavaScript file\n'
      }
      , { type: 'tree'
        , sha: 'c44942a959a822a3a785ed7c4a658db9690dd175'
        , data: '100644 README\u0000\u00fd*\u001d\u0088\u00b0\r\u0084\u0001\u00c0\u0090\177\u00c3\u00e2\u00d3\u00e2_\u0001\u00bbR\u00e740000 lib\u0000\u00aeQ\u0015\u0096\u00e3\u008e\u00d6u\u00db\u0006\u0003\u00a14NN\u00ea/\u0019F4'
      }
      , { type: 'blob'
        , sha: 'fd2a1d88b00d8401c0907fc3e2d3e25f01bb52e7'
        , data: 'Test Repo1\n==========\n\nJust a test repo for something I\'m working on\n'
        , fromDelta: 
           { type: 'ofs_delta'
           , data: [ 128, 1, 69, 144, 69 ]
           , base: '6e0f32d299a8dfd5cb3eb340fb61febb01d87434'
        }
      }
      ]
    )
    test.done()
  }
}

exports['UploadPackParser'] = {
  "NAK": function(test) {
    var uploadPackParser = new JsGit.UploadPackParser(JsGitTestData.uploadPackNAK)
    uploadPackParser.parse()
    test.deepEqual(uploadPackParser.getRemoteLines(), 
                  ['Counting objects: 5, done.', 'Compressing objects: 100% (3/3), done.', 'Total 5 (delta 0), reused 0 (delta 0)'])
    test.done()
  },
  "ACK": function(test) {
    var uploadPackParser = new JsGit.UploadPackParser(JsGitTestData.uploadPackACK)
    uploadPackParser.parse()
    test.deepEqual(uploadPackParser.getRemoteLines(), 
                  ['Counting objects: 8, done.', 'Compressing objects: 100% (6/6), done.', 'Total 6 (delta 0), reused 0 (delta 0)'])
    test.done()
  }
}

exports['nextPktLine()'] = function(test) {
  test.equal(JsGit.nextPktLine("0008NAK\nasdflijasdfj"), "NAK\n")
  test.done()
}
