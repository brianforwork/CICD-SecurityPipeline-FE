# --- Giai đoạn 1: Build ứng dụng ---
# Sử dụng một image có sẵn Maven và Java Development Kit (JDK) để build file .jar
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Đặt thư mục làm việc bên trong image
WORKDIR /app

# Copy file pom.xml để tận dụng cache của Docker. 
# Nếu file này không đổi, Docker sẽ không cần tải lại dependencies.
COPY pom.xml .

# Tải tất cả dependencies về
RUN mvn dependency:go-offline

# Copy toàn bộ source code của dự án vào image
COPY src ./src

# Build ứng dụng, tạo ra file .jar. Bỏ qua các bài test.
RUN mvn package -DskipTests


# --- Giai đoạn 2: Chạy ứng dụng ---
# Sử dụng một image Java Runtime Environment (JRE) nhỏ gọn hơn để chạy.
# Điều này giúp image cuối cùng có kích thước nhỏ và an toàn hơn.
FROM eclipse-temurin:17-jre-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Copy file .jar đã được build từ giai đoạn 'build' vào image hiện tại
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080 để bên ngoài có thể kết nối vào container
EXPOSE 8080

# Lệnh để chạy ứng dụng khi container khởi động
ENTRYPOINT ["java", "-jar", "app.jar"]